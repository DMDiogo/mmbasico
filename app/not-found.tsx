import Link from 'next/link';
import React from 'react';

export default function NotFound (){
    return(
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-center text-4xl font-bold mt-9 '>
                Página Não Encontrada! Error: 404
            </h1>
            <p className='mt-4'>A página que tento acessar não existe</p>
            <Link href="/"className='mt-4 text-blue-500 underline'>
                Voltar para home
            </Link>
        </div>
    );

}