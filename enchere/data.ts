import FetchHelper from "../helper/FetchHelper";
import URLHelper from "../helper/URLHelper";
export const fetchOnGoing = async () => {
    let authen: string | null = localStorage.getItem("token");
    let retour = await (FetchHelper.getData(URLHelper.urlgen("onGoing"), { 'authorization': authen }));
    console.log(retour);
    
    return retour;
}