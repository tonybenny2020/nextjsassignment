import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function EventCreatePage() {
  async function createEvent(formData: FormData) {
    // This needs to be a server action!
    'use server';

    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const eventname = formData.get('eventname') as string;

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        eventname,
      },
    });

    // Redirect the user back to the root route
    redirect('/');
  }

  return (
    <form action={createEvent}>
      <h3 className="font-bold m-3">Create an Event</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="event">
            Code
          </label>
          <textarea
            name="event"
            className="border rounded p-2 w-full"
            id="event"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
