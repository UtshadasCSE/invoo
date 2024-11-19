import mongoDBconnection from "@/lib/config/dbConn";
import { NextResponse } from "next/server";
import Invoo from "./../../../lib/models/Invoo";

export async function POST(req) {
  await mongoDBconnection();
  const { invoo_title, invoo_description } = await req.json();
  await Invoo.create({ invoo_title, invoo_description });
  return NextResponse.json({ success: true, message: "Data has been added" });
}

export async function GET(req) {
  await mongoDBconnection();
  const info = await Invoo.find();
  return NextResponse.json({ message: "true", info });
}
