export interface Message {
    id: number;
    senderId: Number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: Number;
    recipientKnownAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    dateSent: Date;

}
