import SettingsContent from "@/components/pages/settings/settings-content"
import HeaderPage from "@/components/shared/header-page"

const Settings = () => {
  return (
    <div className="settings-page">
        <HeaderPage name="НАСТРОЙКИ" />
        <SettingsContent />
    </div>
  )
}

export default Settings
