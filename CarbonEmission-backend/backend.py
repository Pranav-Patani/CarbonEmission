import psutil
import time

def get_top_apps_data():
    cif = 0.00035  # Carbon Intensity Factor in kg CO2e per kWh
    power_usage = get_running_apps_power_usage()
    usage_time = get_running_apps_usage_time()
    last_restart_time = get_last_restart_time()

    apps_carbon_emission = []
    total_carbon_emission = 0  # Initialize total carbon emission

    # Calculate total carbon emission and individual app carbon emissions
    for app, usage in power_usage.items():
        cpu_power_consumption = usage['cpu_percent'] / 100 * psutil.cpu_freq().current / 100
        memory_power_consumption = usage['memory_percent'] / 100 * psutil.cpu_freq().current / 100
        other_components_power_consumption = 10  # Constant factor for other components
        total_power_consumption = cpu_power_consumption + memory_power_consumption + other_components_power_consumption

        if app in usage_time:
            emission = calculate_carbon_emission(total_power_consumption, usage_time[app], cif)
            total_carbon_emission += emission  # Add to total carbon emission
            app_data = {
                'name': app,
                'power_consumption': round(total_power_consumption, 5),
                'usage_time': round(usage_time[app] / 3600, 2),
                'carbon_emission': emission,
                'usage_data': [10.5, 16.3, 8.2, 5.2, 11.4, 3.7, 6.1],
            }
            apps_carbon_emission.append(app_data)

    # Calculate and add percentage to each app's data
    for app_data in apps_carbon_emission:
        app_data['percentage'] = round((app_data['carbon_emission'] / total_carbon_emission) * 100, 2)

    sorted_apps = sorted(apps_carbon_emission, key=lambda x: x['carbon_emission'], reverse=True)
    appData = {'total_carbon_emission': round(total_carbon_emission, 3), 'data': sorted_apps, 'last_restart_time': last_restart_time}
    return appData;

def calculate_carbon_emission(power_consumption, usage_time, cif):
    return round(((power_consumption * usage_time) * cif) / 1000000, 5)  # Round the result to 5 decimal places

def get_running_apps_power_usage():
    apps_power_usage = {}
    for proc in psutil.process_iter(['name', 'cpu_percent', 'memory_percent']):
        apps_power_usage[proc.info['name']] = {
            'cpu_percent': proc.info['cpu_percent'],
            'memory_percent': proc.info['memory_percent']
        }
    return apps_power_usage

def get_running_apps_usage_time():
    apps_usage_time = {}
    for proc in psutil.process_iter(['name', 'create_time']):
        if proc.info['create_time'] > 0.0:
            apps_usage_time[proc.info['name']] = time.time() - proc.info['create_time']
    return apps_usage_time

def get_last_restart_time():
    boot_time = psutil.boot_time()
    last_restart_time = (time.time() - boot_time) / 3600  # Convert seconds to hours
    return round(last_restart_time, 1)
