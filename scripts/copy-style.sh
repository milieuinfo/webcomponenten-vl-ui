#!/usr/bin/env bash

################################################################################
# Check every webcomponent present under node_modules for presence of style.css.
# If found, copy the CSS-file to the root of the project.
# Rename each CSS-file in the root of the project to match vl-ui-component.css.
#
# Based on the list of copied CSS-files, create a list of filenames with the
# HTML-extension because there is no need to handle web components that do not 
# have a style.css.
# This new list is used to search in the demo-folder.
#
# If a HTML-file matching the web component name is found, the content of the
# HTML-file is checked for an import of the classic style.css. If an import is
# found, it will be replaced by the correct CSS-file. 
# For example: style.css becomes vl-button.css
################################################################################

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
            if [[ "$OSTYPE" == "linux-gnu" ]]; then
                sed -i -e "s%${SEARCHSTRING}%${RESULTSTRING}%" "demo/"$file
            elif [[ "$OSTYPE" == "darwin"* ]]; then
                sed -i "" -e "s%${SEARCHSTRING}%${RESULTSTRING}%" "demo/"$file
            fi
            echo "replaced path to style for file $file"
        fi
    fi
done
