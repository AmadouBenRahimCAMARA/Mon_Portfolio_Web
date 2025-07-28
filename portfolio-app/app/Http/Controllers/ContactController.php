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

        Mail::to('your_actual_email@example.com')->send(new ContactMail($request->all())); // REMPLACEZ CECI PAR VOTRE VRAIE ADRESSE EMAIL

        return response()->json(['message' => 'Message sent successfully!']);
    }
}
