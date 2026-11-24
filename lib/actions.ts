'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

async function requireOwnerSession() {
  const { userId } = await auth();
  if (!userId) throw new Error('Not authenticated');
  return userId;
}

export async function createProject(formData: FormData) {
  await requireOwnerSession();

  await db.project.create({
    data: {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    },
  });
}

export async function updateProject(id: string, formData: FormData) {
  await requireOwnerSession();

  await db.project.update({
    where: { id },
    data: {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    },
  });
}
