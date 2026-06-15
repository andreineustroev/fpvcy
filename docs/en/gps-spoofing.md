# GPS Spoofing

::: danger
Spoofing is specifically targeted at drones. Because of this, they may **fly off in unpredictable directions** or **crash in unpredictable locations**.
:::

Cyprus is located near the Middle East, where conflicts occasionally flare up. As a result, Cyprus can also be affected in the form of disrupted GPS signals.

This typically appears as a sudden loss of satellite signal, or worse, false coordinates that do not change.

1. For consumer drones (e.g. DJI), this usually means they will refuse to fly because they believe they are in an airport restriction zone.
Alternatively, navigation may fail entirely and automatic flight modes become unavailable.

2. For FPV drones, this results in incorrect OSD coordinates, making recovery significantly harder. It also disables reliable Return-to-Home functionality.

::: danger
In case of spoofing, “Return to Home” becomes unpredictable, and the drone may fly off in an unknown direction until it eventually crashes somewhere.
:::

Therefore, if there is any information about spoofing activity, avoid long-range flights and proceed with caution. It is also advisable to set failsafe mode to drop or land.

![Failsafe modes](/images/failsafe_modes.png)

## Technical details

GPS satellites transmit special signals — ephemerides — which are time-synchronized. By collecting a set of ephemerides over a period of time, a receiver can determine its position based on their offsets. This makes GPS relatively easy to spoof: it is sufficient to record ephemerides at a target location and retransmit them with a time-adjusted offset (derived from GPS time itself).

Satellites are much farther away than Beirut or Israel, and the power of jammers significantly exceeds the effective signal strength from satellites. Because of this, even shielding and directional antennas on GPS receivers are not effective. Militaries use phased array antennas to counter jamming; only such measures are effective. Building a phased array at home from improvised materials is not a trivial task.
