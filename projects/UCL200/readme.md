# Bio-Connected Canopy
_Harnessing IoT to quantify the success of urban greening and habitat creation._

The Bio-Connected Canopy project at Gordon Street represents a critical, interdisciplinary component of UCL's 200th-anniversary commitment to sustainability and the Connected Curriculum. This initiative transforms the new green roof and wall installations into a high-tech Living Lab, using an array of integrated IoT sensors, including acoustic monitors, thermal sensors, and high-resolution cameras, to generate real-time environmental intelligence.

![sketch](/gordonstreetsensors.jpeg)
_Overview of sensor locations_

The motivation is two-fold: ecologically, we aim to quantify the success of this nature-based solution in enhancing urban biodiversity, specifically through continuous monitoring of bird and bat populations using acoustic sensors and video cameras. Environmentally, the sensor network provides a critical dataset for analysing bioclimatic conditions. This enables the quantification of the green wall and roof's contribution to mitigating the Urban Heat Island (UHI) effect on the adjacent Chemistry Building using thermal and humidity sensors.

The project extends beyond environmental metrics. We also monitor the social use of the pedestrianised space under the canopy, assessing the impact of the green intervention on building occupant health, well-being, and nature connectedness. By integrating these diverse data streams, from ecology to bioclimatic conditions to social use patterns, the Bio-Connected Canopy acts as a powerful teaching and research platform, embedding real-world project work across faculties. The combined data will quantify the overall success of the urban greening efforts, providing an evidence base for biodiversity net gain and future climate adaptation strategies.

# Key Benefits
### Environmental
Urban Heat Island Mitigation: Provides quantifiable data on the cooling effects of the green wall and canopy structure on the adjacent building and immediate microclimate.

### Ecological
Biodiversity Net Gain: Enables robust, continuous monitoring of species (birds, bats) and habitat usage to measure the effectiveness of the Nature-Based Solution (NBS) design.

### Research & Education
Connected Curriculum: Generates real-world, live data streams for student and staff research projects across multiple UCL departments.

### Well-being & Community
Health Impact Assessment: Monitors the social use and engagement with the space, linking green infrastructure to improvements in staff / student well-being and nature connectedness.

### Strategic
Knowledge Exchange: Positions UCL as a demonstration centre for best-practice climate adaptation and Living Labs, supporting UCL's Nature-Positive and Sustainability strategies, and informing the wider University of London Estate.



# Sensing Equipment

Below is a list of the planned sensors being installed. The overview sketch shows the approximate suggested locations, the table of data and images are provided as a guide for what will be installed.



### Weather Station

Davis Vantage Pro2 (VP2) - measures Temperature, Humidity, Wind speed, Wind direction, Rainfall, Barometric Pressure, Solar Radiation, UV. Mounted on a tripod on top of the green canopy. Console (data receiver) to be installed in adjacent building. [Product link](https://www.davisinstruments.com/pages/vantage-pro2). Components required:

SKU DI-6327CM [Davis Cabled Integrated Sensor Suite 6327C for Pro2 Plus](https://www.weathershop.co.uk/davis-6327-vantage-pro2-iss-plus-cabled)

SKU DI-6316CUK [Davis Cabled Weather Envoy 6316C](https://www.weathershop.co.uk/davis-6316-vantage-pro2-envoy-cabled)

SKU DI-6510USB [WeatherLink 2.0 Windows Software & USB Data Logger](https://www.weathershop.co.uk/accessories/spares-by-brands/davis-spare-parts-accessories/davis-6510-weatherlink-usb) 

SKU DI-7716-00 [Mounting Tripod](https://www.weathershop.co.uk/accessories/spares-by-brands/davis-spare-parts-accessories/davis-7716-tripod)

![Davis VP2](/davisweather.jpeg)

### VS121 - People Counter

Vision based people counter (Milesight VS121) - counts the volume and flow of people using the space to quantify social use and engagement. Installed under the canopy, top down view of the pedestrianised area. [Product Link](https://www.milesight.com/iot/product/lorawan-sensor/vs121). (Note: square sensor in middle of image shown is VS121, against a smoke alarm for size comparison)

SKU VS121 [The USB C variant of the VS121](https://www.milesight.com/iot/product/lorawan-sensor/vs121)

![VS121](/vs121.jpeg)

### Clover Soil Sensor

Soil Moisture Sensor (Tektelic Clover) - monitors soil moisture levels to assess plant health, irrigation needs, and rainwater attenuation performance. Embedded within the green roof growing medium. [Product Link](https://tektelic.com/products/sensors/clover-agriculture-sensor/).

SKU Clover EU868 [TEKTELIC CLOVER Agriculture Soil Moisture Sensor Surface Version - EU868](https://connectedthings.store/gb/lorawan-sensors/agriculture-sensors/tektelic-agriculture-soil-moisture-sensor-surface-version.html)

![Clover Soil Sensor](/soil.jpeg)

### Microphone

Acoupi (bespoke Raspberry Pi based sensor unit) - measures ambient sound to monitor species and general ecological activity of bats and birds. Records sound frequencies to identify and track avian life.	Installed on post on the green canopy. An existing installation is shown to give an indication of appearance. 

![Acoupi](/echobox.jpeg)

Echobox Acoustic Sensor on lamp post (Bat / Bird Monitor)


### Camera
Visual Sensor (bespoke Raspberry Pi based unit)	- live stream of  visual data (video) of green canopy to monitor species and general ecological activity. Installed on post on the green canopy and focused on patch of green roof. An existing installation is shown to give an indication of appearance.

![Birdbox](/birdbox.jpeg)

Birdbox Visual Sensor (Camera and Microphone) - shown here as blue "Bird House"

### Urban Heat Island

Bespoke UHI Sensor - sensor	measures ambient air temperature and humidity to assess the direct cooling impact of the green infrastructure. Positioned to compare the microclimate adjacent to the green wall / canopy with the broader street environment. [Project Page](https://mandymadongyi.github.io/UrbanHeatSense.IoT/about.html).

![Urban Heat Island Sensor](/UHI.jpeg)

# Location Plan

### Canopy and Roof Area:
The Weather Station will be positioned on the south canopy along with the soil moisture sensors placed within the growing medium of the green roof. The Acoustic and Visual Sensors will be installed on posts near the wall to ensure optimal coverage of the green canopy for monitoring biodiversity.

### Green Wall:
The Urban Heat Island Sensor will be mounted on the green wall, to record temperature fluctuations and to continuously measure the bioclimatic benefit provided by the green infrastructure.

### Pedestrianised Area (Under Canopy):
The People Counter (VS121) will be centrally positioned under the canopy to accurately track usage and footfall in the covered space. An Urban Heat Island sensors will also be placed under the canopy to measure shading impact.