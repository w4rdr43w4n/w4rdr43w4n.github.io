#!/bin/bash

# Colors
CYAN='\033[36m'

BOLD_RED='\033[1;31m'
BOLD_GREEN='\033[1;32m'
BOLD_MAGENTA='\033[1;35m'
BOLD_CYAN='\033[1;36m'
BOLD_YELLOW='\033[1;33m'

RESET='\033[0m'


eval "$(ssh-agent -k)"
eval "$(ssh-agent -s)"
clear

echo -e "${BOLD_GREEN}Github Account Switcher By Ward Raawan${RESET}"
echo -e "${BOLD_CYAN}Available Options:${RESET}"
echo "[1] - w4rdr43w4n account"
echo "[2] - chatg6 account"
echo "[q] - Quit"

read -n 1 choice

case $choice in
    1)
        echo -e "\n${BOLD_MAGENTA}Switching to ${BOLD_YELLOW}w4rdr43w4n account${RESET}\n"
        sleep 1s
        ssh-add ~/.ssh/key_w4rd
        clear
        echo -e "${BOLD_GREEN}Done!${RESET}"
        ;;
    2)
        echo -e "\n${BOLD_MAGENTA}Switching to ${BOLD_YELLOW}chatg6 account ${RESET}"
        sleep 1s
        ssh-add ~/.ssh/key_chat
        clear
        echo -e "${BOLD_GREEN}Done!${RESET}"

        ;;
    q|Q)
      echo -e "\nQuitting..."
        ;;
    *)
        echo "Invalid selection. Please try again."
        ;;
esac
