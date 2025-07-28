<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        Mail::to('amadou.ben.rahim.camara@gmail.com')->send(new ContactMail($request->all())); 
        return response()->json(['message' => 'Message sent successfully!']);
    }
}
