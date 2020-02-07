#!/usr/bin/env bash

set -e

copyCssAndRenameCss() {
    for dir in $1; do
        pushd $PWD/node_modules/$dir \
        && if [ -f "style.css" ]; then cp style.css ../../$dir.css; fi \
        && popd
    done
}

getWebcomponents() {
    echo $(ls "node_modules/" | grep -q "vl-ui-*")
}

getCssFiles() {
    echo $(ls | grep -E "vl-ui-(\w)*(.)css")
}

DIRS=$(getWebcomponents)
copyCssAndRenameCss $DIRS

CSSFILES=$(getCssFiles)

HTMLFILES=()

for file in $CSSFILES; do
    STRIPPED=${file::-4}.html
    CLEANED="${STRIPPED//-ui}"
    HTMLFILES+=($CLEANED)
done

SEARCHSTRING="<link rel=\"stylesheet\" type=\"text/css\" href=\"/style.css\"/>"

for file in ${HTMLFILES[@]}; do
    # check if file exists (demo/vl-component.html)
    if [ -f "demo/$file" ]; then 
        # check if searchstring exists in file (demo/vl-component.html)
        if grep -q "$SEARCHSTRING" "demo/$file"; then 
            # change searchstring with new string which refers to correct css
            RESULTSTRING="<link rel=\"stylesheet\" type=\"text/css\" href=\"/${file::-4}css\"/>"
            sed -i "" -e "s%${SEARCHSTRING}%${RESULTSTRING}%" "demo/"$file
            echo "Replaced path to style for file $file"
        fi
    fi
done
