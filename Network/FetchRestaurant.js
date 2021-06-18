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

        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }else{
            CustomToast.showToastWithGravity("Please Check JSON Data Properly")
        }
    
    } catch (err) {
        CustomToast.showToastWithGravity(err.message);
    }
}

export { fetchWithTimeout };

