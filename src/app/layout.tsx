import type {Metadata,Viewport} from 'next';
import './globals.css';
export const metadata: Metadata = {title: {default:'مصر، على مهلك | Egypt, at your pace',template:'%s | مصر، على مهلك'},description:'دليل مستقل لاكتشاف مصر، للمصري والسائح. أماكن وخطط رحلات بمصادر واضحة. An independent, source-led guide to Egypt.',robots:{index:false,follow:false}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#f5f1e9'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
