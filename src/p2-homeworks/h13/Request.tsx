import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./api/RequestsAPI";

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)

    const postRequestClick = () => {
        requestsAPI.postRequest(checked)
            .then(response => console.log(response))
            .catch(error => {
                    console.log({...error})
                    console.log(error.response ? error.response.data.errorText : error.message)
                }
            )
    }

    return (
        <div>
            <SuperButton onClick={postRequestClick}>PRESS</SuperButton>
            <SuperCheckbox style={{paddingLeft: "200px"}} checked={checked}
                           onChangeChecked={setChecked}
            />
        </div>
    )
}