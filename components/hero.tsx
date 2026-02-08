"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { UserDropdown } from "@/components/user-dropdown";

export function Hero({
  isAuthenticated = false,
  userEmail,
}: {
  isAuthenticated?: boolean;
  userEmail?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 lg:px-8 py-4 flex items-center justify-between bg-background border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/contesto-logo.png"
            alt="Contesto"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#qui-sommes-nous"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Qui sommes-nous
          </a>
          <Link
            href="/dashboard/submit-fine"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contester
          </Link>
          <a
            href="#nous-contacter"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Nous contacter
          </a>
          {isAuthenticated && userEmail ? (
            <UserDropdown email={userEmail} />
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="font-medium bg-transparent"
              >
                Connexion
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/50 px-6 py-4 space-y-3 sticky top-[65px] z-40">
          <a
            href="#qui-sommes-nous"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Qui sommes-nous
          </a>
          <Link
            href="/dashboard/submit-fine"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contester
          </Link>
          <a
            href="#nous-contacter"
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nous contacter
          </a>
          {isAuthenticated && userEmail ? (
            <div className="flex items-center gap-3 py-2">
              <UserDropdown email={userEmail} />
              <span className="text-sm text-muted-foreground truncate">{userEmail}</span>
            </div>
          ) : (
            <Link href="/login" className="block">
              <Button
                variant="outline"
                size="sm"
                className="w-full font-medium bg-transparent"
              >
                Connexion
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Hero section with background image */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
        {/* Background image - no overlay effects, image stays as-is */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover object-center sm:object-right-bottom"
            priority
          />
        </div>

        {/* Content on the left side */}
        <div className="relative z-10 flex items-center h-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
          <div className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-12 lg:px-16 xl:px-20 max-w-xl lg:max-w-2xl">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight text-balance">
              Contester vos Amendes{" "}
              <span className="text-muted-foreground">
                Conservez vos points
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty max-w-md">
              Notre IA analyse votre dossier et nos avocats partenaires
              contestent pour vous. Simple, rapide, et garanti.
            </p>

            {/* CTA Section */}
            <div className="mt-7 space-y-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/dashboard/submit-fine">
                  Soumettre mon amende
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <div className="flex items-center gap-2">
                <a
                  href="#comment-ca-marche"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Voir comment ca marche
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-foreground/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      100% conforme
                    </p>
                    <p className="text-muted-foreground">Code de la Route</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Avocats certifies
                    </p>
                    <p className="text-muted-foreground">Partenaires</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Paiement securise
                    </p>
                    <p className="text-muted-foreground">Stripe & PayPal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      94% de taux de reussite
                    </p>
                    <p className="text-muted-foreground">
                      Resultats constates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
