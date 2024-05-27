
# Replace with actual server details and command
SERVER_ADDRESS="76.167.195.153"
USERNAME="hadrian"
REMOTE_COMMAND="cd /d E:pull_origin.bat" 
REMOTE_COMMAND1="pull_origin.bat" 

# Establish connection (assuming password authentication)
echo Enter Password for ssh server: 
read password
sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND", "$REMOTE_COMMAND1"

# Handle exit status (optional)
if [ $? -eq 0 ]; then
  echo "Remote command executed successfully."
else
  echo "Error: Remote command failed."
fi
