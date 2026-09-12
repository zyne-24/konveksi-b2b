"use client"

import React from 'react'
import { BentoGrid } from "@/components/react-bits/BentoGrid"
import { StaggerItem } from "@/components/react-bits/StaggerItem"

const MATERIALS = [
  {
    name: "American Drill Series C",
    desc: "Fiber kuat, tidak mudah susut, sari knot terjaga, benang kursen tebal bermanfaat. Cocok untuk seragam kantor standar, PDH, dan jaket Lapangan."
  },
  {
    name: "Japan Drill",
    desc: "Teobr asli high-quality import dari Jepang. Serat lebih halus, panjang, dan kuat. Sangat rapi saat digambar atau bordir, lembut saat dipakai seharian ditempat berjadwal berdiri."
  },
  {
    name: "Drill Jumbo/Plaza Series",
    desc: "Kain Drill dengan textre berusel lebar 13-14cm. Memberikan kesan berkelas dan tahan lama, sangat efisien untuk konveksi besar skala me-ngem-comment korporat."
  },
  {
    name: "Tropical Curtain Series",
    desc: "Pelapis lapisan katun tirai dengan benang ketat (CW). Sangat mudah diproses, tetap menjaga serat sari, dan sering dipakai untuk PO dengan volume besar."
  },
  {
    name: "Taslan Brebia / Perca / Otose",
    desc: "Kain Taslan premium singular berabar serat tebal dan lembut aksurasi. Memiliki sistem pemadatan serat cenat-cenat (single stretch) yang membuat pengerjaan jahitan sangat tepat."
  },
  {
    name: "Taslan Waterproof",
    desc: "Bahan anti air (Water Repellent/Proof) dengan kotektur berarkan air. Sangat cocok untuk rompi, jaket, dan outfit outdoor yang butuh perlindungan dari hujan."
  },
  {
    name: "Fleece / Minky Cotton",
    desc: "Kain lapisan tebal, halus, dan panas, cocok untuk menjahit Hoodie, Crewneck, Sweatshirt, dan material untuk outfit pendamping."
  },
  {
    name: "Cotton (Coton)",
    desc: "Kain katun base bawaan Indonesia. Selalu mudah dibuat rapi untuk konveksi krieu B2B di semua type tampilan ilga."
  },
  {
    name: "Collared Cotton / Poly-Cotton",
    desc: "Serat campuran katun dan poly yang berbahaya, oversur dan aman, cair dapat ma-murah lewat TE 2+1 gram. Cocok untuk PO berkala."
  },
  {
    name: "Knife Cut / Serge",
    desc: "Arajah bahan untuk mode kulit kepala menghasilkan rapi dan kekal. Kadang digunakan untuk kategori kaspresso and kasiner."
  }
]

function MaterialCard({ item, index }: { item: typeof MATERIALS[0], index: number }) {
  return (
    <StaggerItem index={index}>
      <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:border-zinc-300">
        <h3 className="font-bold text-xl text-zinc-950 mb-3">{item.name}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
      </div>
    </StaggerItem>
  )
}

export function MaterialDisplay() {
  return (
    <BentoGrid>
      {MATERIALS.map((item, idx) => (
        <MaterialCard key={idx} item={item} index={idx} />
      ))}
    </BentoGrid>
  )
}