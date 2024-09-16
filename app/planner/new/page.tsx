import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function EventCreatePage() {
  async function createEvent(formData: FormData) {
    // This needs to be a server action!
    'use server';

    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const event_name = formData.get('event_name') as string;

    // Create a new record in the database
    const event = await db.event.create({
      data: {
        title,
        event_name,
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
          <label className="w-12" htmlFor="event_name">
            EventName
          </label>
          <textarea
            name="event_name"
            className="border rounded p-2 w-full"
            id="event_name"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
