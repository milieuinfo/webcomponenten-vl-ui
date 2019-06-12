describe('map with actions', function() {
	function createFakeInteraction() {
		var active = true;
		return {
			getActive: function() {
				return active;
			},
			setActive: function(_active) {
				active = _active;
			}
		}
	}
	
	var action1, action2;
	
	function createMapWithActions() {
		spyOn(ol.Map, 'call').and.callFake(function(map) {
			map.interactions = [];
			map.addInteraction = function(interaction) {
				map.interactions.push(interaction);
			}
			map.removeInteraction = function(interaction) {
				map.interactions.splice(map.interactions.indexOf(interaction), 1);
			}
		});
		
		return new acd.ol.MapWithActions({
			actions: [
				action1 = new acd.ol.action.MapAction([createFakeInteraction(), createFakeInteraction()]),
				action2 = new acd.ol.action.MapAction([createFakeInteraction(), createFakeInteraction(), createFakeInteraction()])
			]
		});
	}
	
	function afterActivation(callback, done) {
		setTimeout(function() {
			callback();
			done();
		}, acd.ol.MapWithActions.prototype.CLICK_COUNT_TIMEOUT);
	}
	
	it('voegt de interacties van alle actie toe aan de kaart', function() {		
		var map = createMapWithActions();
		
		expect(map.interactions.length).toEqual(5);
	});
	
	it('kan maar één actie tegelijkertijd activeren, waarbij enkel deze actie zijn interacties op actief staan', function(done) {
		var map = createMapWithActions();
		map.activateAction(action1);
		expect(map.currentAction).toBe(action1);
		
		map.activateAction(action2);
		
		expect(map.currentAction).toBe(action2);
		action1.interactions.forEach(function(interaction) {
			expect(interaction.getActive()).toBe(false);
		});
		afterActivation(function() {
			action2.interactions.forEach(function(interaction) {
				expect(interaction.getActive()).toBe(true);
			});
		}, done);
	});
	
	it('heeft als default actie de eerste actie', function() {
		var map = createMapWithActions();
		
		expect(map.currentAction).toBe(action1);
	});
	
	it('kan een nieuwe actie toevoegen aan de map', function() {
		var map = createMapWithActions();
		expect(map.actions.length).toEqual(2);
		expect(map.interactions.length).toEqual(5);
		expect(map.currentAction).toBe(action1);

		var nieuweAction = new acd.ol.action.MapAction([createFakeInteraction(), createFakeInteraction()])
		map.addAction(nieuweAction);
		
		expect(map.actions.length).toEqual(3);
		expect(map.actions[2]).toBe(nieuweAction);
		expect(map.interactions.length).toEqual(7);
		expect(map.currentAction).toBe(action1);
	});

	it('kan een actie verwijderen van de map', function() {
		var map = createMapWithActions();
		var nieuweAction = new acd.ol.action.MapAction([createFakeInteraction(), createFakeInteraction()])
		map.addAction(nieuweAction);
		
		map.removeAction(nieuweAction);
		expect(map.actions.length).toEqual(2);
		expect(map.actions.indexOf(nieuweAction)).toBe(-1);
		expect(map.interactions.length).toEqual(5);
		expect(map.currentAction).toBe(action1);
	});

	it('als de te verwijderen actie de current actie wordt de default geactiveerd', function() {
		var map = createMapWithActions();
		var nieuweAction = new acd.ol.action.MapAction([createFakeInteraction(), createFakeInteraction()])
		map.addAction(nieuweAction);
		
		map.activateAction(nieuweAction);
		expect(map.currentAction).toBe(nieuweAction);
		map.removeAction(nieuweAction);
		expect(map.currentAction).toBe(map.actions[0]);
	});
	
	it('bij het activeren van een actie, zullen we eerst controleren of deze actie al niet actief stond vooraleer we de vorige actie gaan deactiveren en de nieuwe actie gaan activeren', function(done) {
		var map = createMapWithActions();
		spyOn(action1, 'activate');
		spyOn(action1, 'deactivate');
		spyOn(action2, 'activate');
		spyOn(action2, 'deactivate');
		
		map.activateAction(action1);
		
		map.activateAction(action1);
		map.activateAction(action2);
		afterActivation(function() {
			expect(action1.activate).not.toHaveBeenCalled();
			expect(action2.activate).toHaveBeenCalled();
			expect(action1.deactivate).toHaveBeenCalled();
		}, done);
	});
	
	it('Wanneer de default actie wordt geactiveerd, zal de huidige actie gedeactiveerd worden en is de nieuwe default actie de eerst gedefinieerde actie', function(done) {
		var map = createMapWithActions();

		map.activateAction(action2);
		expect(map.currentAction).toBe(action2);
		
		spyOn(action1, 'activate');
		spyOn(action2, 'activate');
		spyOn(action2, 'deactivate');
		

		map.activateDefaultAction();
		
		afterActivation(function() {
			expect(action2.deactivate).toHaveBeenCalled();
			expect(action1.activate).toHaveBeenCalled();
		}, done);
	});
	
	it('Wanneer de default actie wordt geactiveerd, zal de huidige actie gedeactiveerd worden en is de nieuwe default actie de eerst gedefinieerde actie, ook als de huidige actie de eerst gedefinieerde is', function(done) {
		var map = createMapWithActions();

		map.activateAction(action1);
		expect(map.currentAction).toBe(action1);
		
		spyOn(action1, 'activate');
		spyOn(action1, 'deactivate');
		
		map.activateDefaultAction();
		
		afterActivation(function() {
			expect(action1.deactivate).toHaveBeenCalled();
			expect(action1.activate).toHaveBeenCalled();
		}, done);
	});
	
	it('bij het aanmaken van een kaart met acties wordt standaard functionaliteit toegevoegd aan de kaart dat bij escape de eerste kaart actie geactiveerd wordt', function() {
		var map = new acd.ol.MapWithActions({
			actions: []
		});
		spyOn(map, 'activateDefaultAction');
		expect(map.activateDefaultAction).not.toHaveBeenCalled();
		var event = new Event('keydown');
		event.keyCode = 27;
		document.body.dispatchEvent(event);
		expect(map.activateDefaultAction).toHaveBeenCalled();
	});
	
	it('indien gewenst kan de standaard escape functionaliteit uitgeschakeld worden bij het aanmaken van een kaart met acties', function() {
		var map = new acd.ol.MapWithActions({
			actions: [],
			disableEscapeKey: true
		});
		spyOn(map, 'activateDefaultAction');
		expect(map.activateDefaultAction).not.toHaveBeenCalled();
		var event = new Event('keydown');
		event.keyCode = 27;
		document.body.dispatchEvent(event);
		expect(map.activateDefaultAction).not.toHaveBeenCalled();
	});
});