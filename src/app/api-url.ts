export class ApiUrls {

    public static GENERAL_ERROR_MESSAGE = 'Something went wrong, please try again after sometime';
    /*
    BASE_URL() 
    // for api base url of project
    --------------------------------
    getKycStatus()
    // for get user kyc status list
    ---------------------------------
    sendEmailToUsers()
    // for post request on the specific user email as per their status
    */
    public static get BASE_URL(): string {
        return 'http://demo.adamantcoders.com:8001/admin/secure/';
    }

    public static get getKycStatus(): string {
        return this.BASE_URL + 'getKycStatus';
    }
    public static get sendEmailToUsers(): string {
        return this.BASE_URL + 'sendBulkEmail';
    }
}