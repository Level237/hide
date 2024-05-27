"use client"
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
        <Link href="/">
            <Image
                src="/logo.png"
                width={45}
                height={45}
                alt="Float UI logo"
            />
        </Link>
        
    </div>
)
