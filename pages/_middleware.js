import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (req.page.name && req.page.name != '/') {
        return NextResponse.redirect('/')
    }
    return NextResponse.next()
}