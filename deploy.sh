
# Replace with actual server details and command
SERVER_ADDRESS="76.167.195.153"
USERNAME="hadrian"
#REMOTE_COMMAND1="cd /d E:\Smart_Expire\Smart-expire" 
REMOTE_COMMAND2="E:\Smart_Expire\Smart-expire\pull_origin.bat" 
#TODO add run server and on desktop server for frontend

# Establish connection (assuming password authentication)
echo Enter Password for ssh server: 
read password
#sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND1"
sshpass -p $password ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER_ADDRESS "$REMOTE_COMMAND2"
# Handle exit status (optional)
if [ $? -eq 0 ]; then
  echo "Remote command executed successfully."
else
  echo "Error: Remote command failed."
fi