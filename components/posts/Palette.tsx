import { PostStore } from '@/store/PostStore'
import React, { useMemo, useState } from 'react'
import { GradientButton, GradientPicker } from '../PicExample'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Link from 'next/link'

export default function Palette(props:{color:string}) {
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)
  const [background, setBackground] = useState('')
  const solids = [
    '#E2E2E2',
    '#ff75c3',
    '#ffa647',
    '#ffe83f',
    '#9fff5b',
    '#70e2ff',
    '#cd93ff',
    '#09203f',
    "#9400D3",
    "#c84e89",
    "#00F5A0",
    "#F7941E",
    "#72C6EF",
    "#FD8112",
    "#bf5ae0",
    "#fbed96",
    "#FFE000",
    "#F7F8F8",
    "#00416A",
    "#334d50",
    "#0052D4",
    "#5433FF",
    "#799F0C",
    "#ffe259",
    "#acb6e5",
    "#536976",
    "#B79891",
    "#9796f0",
    "#BBD2C5",
    "#076585",
    "#00467F",
    "#000C40",
    "#1488CC",
    "#ec008c",
    "#cc2b5e",
    "#e65c00",
    "#2b5876",
    "#314755",
    "#77A1D3",
    "#ff6e7f",
    "#e52d27",
    "#603813"
  ]

  const gradients = [
    'linear-gradient(to top left,#accbee,#e7f0fd)',
    'linear-gradient(to top left,#d5d4d0,#d5d4d0,#eeeeec)',
    'linear-gradient(to top left,#000000,#434343)',
    'linear-gradient(to top left,#09203f,#537895)',
    'linear-gradient(to top left,#AC32E4,#7918F2,#4801FF)',
    'linear-gradient(to top left,#f953c6,#b91d73)',
    'linear-gradient(to top left,#ee0979,#ff6a00)',
    'linear-gradient(to top left,#F00000,#DC281E)',
    'linear-gradient(to top left,#00c6ff,#0072ff)',
    'linear-gradient(to top left,#4facfe,#00f2fe)',
    'linear-gradient(to top left,#0ba360,#3cba92)',
    'linear-gradient(to top left,#FDFC47,#24FE41)',
    'linear-gradient(to top left,#8a2be2,#0000cd,#228b22,#ccff00)',
    'linear-gradient(to top left,#40E0D0,#FF8C00,#FF0080)',
    'linear-gradient(to top left,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)',
    'linear-gradient(to top left,#ff75c3,#ffa647,#ffe83f,#9fff5b,#70e2ff,#cd93ff)',
  ]

  const images = [
    'url(https://images.unsplash.com/photo-1634746422832-5e41836d4642?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    'url(https://images.unsplash.com/photo-1634746422769-435961a85f5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    'url(https://images.unsplash.com/photo-1688822863426-8c5f9b257090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=90)',
    'url(https://images.unsplash.com/photo-1596865249308-2472dc5807d7?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  ]
  const defaultTab = useMemo(() => {
    if (background.includes('url')) return 'image'
    if (background.includes('gradient')) return 'gradient'
    return 'solid'
  }, [background])
  return (
    <div>
       <Tabs defaultValue={defaultTab} className="w-full   bg-[#262626] p-3 rounded-2xl ">
          <TabsList className="w-full  mb-4  bg-[#262626]">
            <TabsTrigger className="flex-1 " value="solid">
              Solid
            </TabsTrigger>
            <TabsTrigger className="flex-1 " value="gradient">
              Gradient
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="image">
              Image
            </TabsTrigger>
          </TabsList>

          <TabsContent value="solid" className="flex  flex-wrap gap-1 mt-0">
            {solids.map((s) => (
              <div
                key={s}
                style={{ background: s }}
                className="rounded-md h-6 w-6 cursor-pointer active:bg-blue-200  active:scale-105"
                onClick={() => {changeBgHandler(s)}}
              />
            ))}
          </TabsContent>

          <TabsContent value="gradient" className="mt-0">
            <div className="flex flex-wrap gap-1 mb-2">
              {gradients.map((s) => (
                <div
                  key={s}
                  style={{ background: s }}
                  className="rounded-md h-6 w-6 cursor-pointer active:scale-105"
                  onClick={() => {changeBgHandler(s)}}
                />
              ))}
            </div>

            <GradientButton background={background}>
              💡 Get more at{' '}
              <Link
                href="https://gradient.page/css/ui-gradients"
                className="hover:underline font-bold"
                target="_blank"
              >
                Gradient Page
              </Link>
            </GradientButton>
          </TabsContent>

          <TabsContent value="image" className="mt-0">
            <div className="grid grid-cols-2 gap-1 mb-2">
              {images.map((s) => (
                <div
                  key={s}
                  style={{ backgroundImage: s }}
                  className="rounded-md bg-cover bg-center h-12 w-full cursor-pointer active:scale-105"
                  onClick={() => {changeBgHandler(s)}}
                />
              ))}
            </div>

            <GradientButton background={background}>
              🎁 Get abstract{' '}
              <Link
                href="https://gradient.page/wallpapers"
                className="hover:underline font-bold"
                target="_blank"
              >
                wallpapers
              </Link>
            </GradientButton>
          </TabsContent>

          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

</div>
  )
}
