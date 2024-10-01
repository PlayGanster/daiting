import PopupFull from "@/components/shared/popup-full"
import { SettingsListSelect, SettingsListSelectDataPopup, SettingsListSwitches } from "@/data/settings/settings-data"
import { SettingsListSelectDataPopupType, SettingsListSelectPopupType, SettingsListSelectType, SettingsListSwitchesType } from "@/types/types"
import "@styles/pages/settings/settings-content.scss"
import { useEffect, useState } from "react"
import { MdArrowForwardIos } from "react-icons/md"

const SettingsContent = () => {

    const [selectPopupFull, setSelectPopupFull] = useState<number | null>(null)
    const [switches, setSwitches] = useState<SettingsListSwitchesType[]>([])

    useEffect(() => {
        setSwitches(SettingsListSwitches)
    }, [])

    function activeSwitch(id: number) {
        const copy = [...switches]
        copy.filter((el:SettingsListSwitchesType) => {
            if(el.id === id){
                if(el.active === true) el.active = false
                else el.active = true
            }
        })
        setSwitches(copy)
    }

    function renderPopupFull() {
        if (selectPopupFull !== null) {
            const selectedList = SettingsListSelect.find((el_list: SettingsListSelectType) => el_list.id === selectPopupFull);
            if (selectedList) {
                const selectedData = SettingsListSelectDataPopup.find((el_data: SettingsListSelectDataPopupType) => el_data.id_select === selectPopupFull);
                if (selectedData) {
                    return (
                        <PopupFull
                            name={selectedList.name}
                            content={
                                <>
                                    {
                                        selectedData.data && selectedData.data.map((el:SettingsListSelectPopupType, index: number) => (
                                            <div className="select-item-popup" key={index} onClick={() => setSelectPopupFull(null)}>
                                                {el.value}
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        />
                    );
                }
            }
        }
        return null; // or some default value
    }


  return (
    <div className="settings-content">
        <div className="content__list--select">
            {
                SettingsListSelect && SettingsListSelect.map((el: SettingsListSelectType, index: number) => (
                    <div className="select-item" key={index} onClick={() => setSelectPopupFull(el.id)}>
                        <div className="item__left">
                            <p className="left__name">{el.name}</p>
                            <p className="left__value">{el.value}</p>
                        </div>
                        <div className="item__right">
                            <MdArrowForwardIos size={24} />
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="content__list--switch">
            {
                switches && switches.map((el: SettingsListSwitchesType, index: number) => (
                    <div className="switch-item" key={index} onClick={() => activeSwitch(el.id)}>
                        <p className="item__name">{el.name}</p>
                        <div className={`item__switch ${el.active ? "--active" : ""}`}>
                            <div className="switch-point"></div>
                        </div>
                    </div>
                ))
            }
        </div>
        {renderPopupFull()}
    </div>
  )
}

export default SettingsContent
