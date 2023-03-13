export interface IChat {
    id: string;
    created_at: number;
    title: string;
    avatar: string;
    private: boolean;
    last_message: {
        created_at: number;
        user_id: string;
        user_name: string;
        user_surname: string;
        you: boolean;
        message: string;
    };
    users: {
        id: string;
        name: string;
        surname: string;
        avatar: string;
    }[];
    count_unread: number;
}
