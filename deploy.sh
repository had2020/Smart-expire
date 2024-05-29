# Replace with actual server details
SERVER_ADDRESS="76.167.195.153"
USERNAME="hadrian"
REMOTE_COMMAND1="cd github_repos\Smart-expire"  # Assuming the script is there
REMOTE_COMMAND2="gh repo sync"
# npm install # to fix bug

# Establish connection (assuming password authentication)
echo Enter Password for ssh server: 
read password

#sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND1"
sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND1; $REMOTE_COMMAND2"

# Handle exit status (optional)
if [ $? -eq 0 ]; then
  echo "Remote commands executed successfully."
else
  echo "Error: Remote commands failed."
fi
