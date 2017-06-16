export class Notifications{
    private notifs: {
        title: string,
        author: string,
        input: string,
    }[] = [];

    addNotif(notif: {
        title: string,
        author: string,
        input: string,
    }){
        this.notifs.unshift(notif);
    }

    getNotification(){
        return this.notifs.slice();
    }
}