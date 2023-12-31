import threading
import subprocess

# This goes to a thread
def ejecutar_matrix_rain():
	subprocess.call(['python', 'src/matrix/pymatrix-rain-master/pymatrix/pymatrix.py'])
#	subprocess.call(['python', 'src/matrix/mymatrix.py'])

# This function will go to other thread
def ejecutar_TDAH_reminder():
	subprocess.call(['python', 'src/audioplayer.py'])

# Creating threads to execute scripts
hilo_matrix_rain = threading.Thread(target=ejecutar_matrix_rain)
hilo_TDAH_reminder = threading.Thread(target=ejecutar_TDAH_reminder)

# Iniciar los hilos
hilo_matrix_rain.start()
hilo_TDAH_reminder.start()

# Esperar a que los hilos terminen (esto no se ejecutará porque los programas son bucles infinitos)
hilo_matrix_rain.join()
hilo_TDAH_reminder.join()
