<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Models\Note;

class NotesController extends Controller
{
    public function getNotes()
    {
        $notes = Note::select(['id', 'title', 'subtitle', 'colour', 'updated_at', 'created_at'])->get();
        return $notes;
    }

    public function getNote($id)
    {
        // return "hello";
        $note = Note::where('id', $id)->first();
        // return $note;
        if(!is_null($note)){
            return response()->json(
                $note
            , 201);
        }else{
            return response()->json([
                'message'=>'note not found'
            ],404);
        }
    }

    public function createNote(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'subTitle' => 'string',
            'content' => 'required|string',
            'colour' => 'required|string'
        ]);

        $note = Note::updateOrCreate([
            'id'=>$request->id
        ],[
            'title' => $request->title,
            'subtitle'=> $request->subTitle,
            'colour' => $request->colour,
            'content' => $request->content
        ]);

        $note->save();

        return response()->json([
            'message' => 'Successfully created note',
        ], 201);

    }

    public function deleteNote($id)
    {   
        $note = Note::find($id);

        $note->delete();

        return response()->json([
            'message' => 'Successfully deleted note',
        ], 202);
    }
}

