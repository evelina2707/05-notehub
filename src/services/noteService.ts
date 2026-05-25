import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const BASE_URL = 'https://notehub-public.goit.study/api';
const token = import.meta.env.VITE_NOTEHUB_TOKEN;

interface FetchNotesResponse{
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams{
  page: number;
  search?: string;
  perPage: number;
}

interface CreateNoteData{
  title: string;
  content: string;
  tag: NoteTag;
}

export async function fetchNotes({ page, search, perPage, }: FetchNotesParams) : Promise<FetchNotesResponse> {
  const res = await axios.get<FetchNotesResponse>(`${BASE_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
      search,
      perPage
    },
  });

  return res.data;
}

export async function createNote(note:CreateNoteData):Promise<Note> {
  const res = await axios.post<Note>(`${BASE_URL}/notes`,
    note,
    {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function deleteNote(id:string):Promise<Note>{
  const res = await axios.delete<Note>(`${BASE_URL}/notes/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    });
  return res.data;
}