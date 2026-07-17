import {
  FiWind,
  FiWifi,
  FiDroplet,
  FiZap,
  FiLock,
  FiSun,
  FiShield,
  FiCamera,
  FiActivity,
  FiPackage,
  FiBookOpen,
  FiVolumeX,
  FiBattery,
  FiStar,
} from "react-icons/fi";
import { GiOfficeChair, GiFireExtinguisher } from "react-icons/gi";

const map = {
  snowflake: FiWind,
  chair: GiOfficeChair,
  wifi: FiWifi,
  droplet: FiDroplet,
  snow: FiDroplet,
  flame: FiZap,
  cabin: FiLock,
  box: FiPackage,
  "reading-box": FiBookOpen,
  lamp: FiSun,
  plug: FiZap,
  leaf: FiActivity,
  mute: FiVolumeX,
  battery: FiBattery,
  sparkle: FiStar,
  camera: FiCamera,
  shield: FiShield,
  broom: FiActivity,
  fire: GiFireExtinguisher,
};

export default function FacilityIcon({ name, className = "" }) {
  const Icon = map[name] || FiStar;
  return <Icon className={className} />;
}
