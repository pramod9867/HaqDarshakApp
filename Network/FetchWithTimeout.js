import { decryptString, encryptString } from '../NativeModules/EncryptioUtils';
import * as CustomToast from '../GenericCompoenents/CustomToast';

async function fetchWithTimeout(resource, options) {
    try {
        const { timeout = 8000 } = options;

        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(resource, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(id);


        console.log(response);


        if (response.ok) {
            const responseJson = await response.json();
            const decodeString = await decryptString(responseJson);
            const { Status, Response } = JSON.parse(decodeString);
            console.log(Response);
            // console.log("Response is..........");
            return JSON.parse(Response);
        } else {
            CustomToast.showToastWithGravity("Please check data properly");
        }
    } catch (err) {
        CustomToast.showToastWithGravity(err.message);
    }
}

async function convertToFormData(body) {
    const data = await encryptString(JSON.stringify(body));
    const formData = new FormData();
    formData.append("json", data);
    console.log("Form Data is");
    console.log(formData)
    return formData;
}


async function convertToFormDataJson(body) {
    const data = await encryptString(JSON.stringify(body));
    const formData = new FormData();
    formData.append("jsondata", data);
    console.log("Form Data is");
    console.log(formData)
    return formData;
}

async function convertToFormDataJsonWithFiles(body, files) {
    console.log("Into the form data");
    console.log(files);
    const data = await encryptString(JSON.stringify(body));
    const formData = new FormData();
    const uploadedFiles = files.name != undefined ? files : "";
    formData.append("jsondata", data);
    formData.append("MyFiles", uploadedFiles)
    console.log("Form Data is");
    console.log(formData)
    return formData;
}

export { fetchWithTimeout, convertToFormData, convertToFormDataJson, convertToFormDataJsonWithFiles };

