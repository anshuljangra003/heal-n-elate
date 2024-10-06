"use client"
import Header from '@/components/Header'
import HealingList from '@/components/HealingList'
import React from 'react'

function Healings() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
        <Header/>
        <HealingList/>
    </main>
  )
}

export default Healings