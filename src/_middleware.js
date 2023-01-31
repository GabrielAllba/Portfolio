import {NextResponse} from 'next/server'
import { verify } from 'jsonwebtoken'

const secret = 'supersecret'

export default function middleware(req){
    const {cookies} = req
    const jwt = cookies.OurSiteJWT

    const url = req.url
    if(url.includes('/admin')){
        if(jwt === undefined || !jwt){
            return NextResponse.redirect('/')
        }

        try {
          verify(jwt, secret);

          return NextResponse.next();
        } catch (e) {
          return NextResponse.redirect("/");
        }
        
    }

    return NextResponse.next()
    
}