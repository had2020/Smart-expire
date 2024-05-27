
# Replace with actual server details and command
SERVER_ADDRESS="76.167.195.153"
USERNAME="hadrian"
REMOTE_COMMAND="s"  # Example command

# Establish connection (assuming password authentication)
echo Enter Password for ssh server: 
read password
sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND"

# Handle exit status (optional)
if [ $? -eq 0 ]; then
  echo "Remote command executed successfully."
else
  echo "Error: Remote command failed."
fi
