import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session)

    const user = session?.user;
    if(!user){
        redirect('/auth/signin')
        return <p>Please sign in</p>
    }

    return (
        <div>
            <h2>This is Dashing Board</h2>
        </div>
    );
};

export default page;