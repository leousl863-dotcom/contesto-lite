import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { UserDropdown } from '@/components/user-dropdown'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  
  // Check if user is authenticated
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/contesto-logo.png"
                alt="Contesto"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/dashboard" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Tableau de bord
              </Link>
              <Link 
                href="/dashboard/submit-fine" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Nouvelle amende
              </Link>
            </nav>
          </div>

          <UserDropdown email={user.email || ''} />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
