# Replace with actual server details
SERVER_ADDRESS="76.167.195.153"
USERNAME="hadrian"
REMOTE_COMMAND1="cd github_repos"  # Assuming the script is there
#REMOTE_COMMAND2="gh repo sync" # old
REMOTE_COMMAND2="cd Smart-expire"
REMOTE_COMMAND3="git pull"
REMOTE_COMMAND4="cd Client"
REMOTE_COMMAND5="npm install"
REMOTE_COMMAND6="npm run build"
REMOTE_COMMAND7="sudo systemctl restart nginx"
REMOTE_COMMAND8="cd .."
REMOTE_COMMAND9="sh run.sh"

# sudo systemctl restart nginx
# then password enter
# npm install # to fix bug

# Establish connection (assuming password authentication)
echo Enter Password for ssh server: 
read password

#sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND1"
sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND1; $REMOTE_COMMAND2; $REMOTE_COMMAND3; $REMOTE_COMMAND4; $REMOTE_COMMAND5; $REMOTE_COMMAND6; $REMOTE_COMMAND7; $REMOTE_COMMAND8; $REMOTE_COMMAND9"

# Handle exit status (optional)
if [ $? -eq 0 ]; then
  echo "Remote commands executed successfully."
else
  echo "Error: Remote commands failed."
fi
