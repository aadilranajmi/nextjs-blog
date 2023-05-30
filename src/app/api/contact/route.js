import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request) {
    const { email, name, message } = await request.json();
    if (
        !email ||
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !message ||
        message.trim() === ''
    ) {
        NextResponse.json({ message: 'Invalid input.' }, { status: 422 });
        return;
    }

    const newMessage = {
        email,
        name,
        message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.we2lvnf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
        client = await MongoClient.connect(connectionString);
    } catch (error) {
        NextResponse.json(
            { message: 'Could not connect to database.' },
            { status: 500 }
        );
        return;
    }

    const db = client.db();

    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        client.close();
        NextResponse.json(
            { message: 'Storing message failed!' },
            { status: 500 }
        );
        return;
    }

    client.close();

    console.log(newMessage);

    return NextResponse.json(
        { message: 'Successfully stored message!', message: newMessage },
        { status: 201 }
    );
}
