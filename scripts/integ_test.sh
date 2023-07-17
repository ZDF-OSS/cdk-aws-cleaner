#!/bin/bash
set +e

display_menu() {
    clear
    echo "==============================================="
    echo "        CDK Infrastructure Testing             "
    echo "==============================================="
    echo "1. Deploy Test Infrastructure"
    echo "2. Remove Test Infrastructure"
    echo "Q. Quit"
    echo "==============================================="
}

handle_deploy() {
    echo "Deploying test infrastructure..."

    cdk --app='./lib/integ.default.js' deploy --require-approval never
}

handle_remove() {
    echo "Removing test infrastructure..."
    
    cdk --app='./lib/integ.default.js' destroy
}

while true; do
    display_menu
    read -p "Enter your choice: " choice

    case "$choice" in
        1)
            handle_deploy
            ;;
        2)
            handle_remove
            ;;
        q|Q)
            break
            ;;
        *)
            echo "Invalid choice!"
            echo "Stopping..."
            exit 1
            ;;
    esac
done


