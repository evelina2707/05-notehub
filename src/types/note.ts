export type NoteTag = 'Work' | 'Personal' | 'Shopping' | 'Meeting' | 'Todo';

export interface Note{
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tag: NoteTag;
}