import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Shield, MapPin, AlertTriangle, CheckCircle, Clock, Search,
  ChevronRight, Bell, Settings, FileText, BarChart3, Eye,
  Trash2, Edit, Plus, Info, Download, Upload, X, Filter,
  MessageCircle, User, Mail, Lock, Radio, Zap, ArrowLeft,
  Megaphone, Navigation, Camera, Heart, Star, Copy, ExternalLink,
} from 'lucide-react';

// shadcn/ui components
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Switch } from '../../components/ui/switch';
import { Progress } from '../../components/ui/progress';
import { Skeleton } from '../../components/ui/skeleton';
import { Separator } from '../../components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
import { Alert, AlertTitle, AlertDescription } from '../../components/ui/alert';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Slider } from '../../components/ui/slider';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/select';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../components/ui/dialog';
import { Popover, PopoverTrigger, PopoverContent } from '../../components/ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent } from '../../components/ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../../components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../../components/ui/sheet';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';

// ─── Helpers ────────────────────────────────────────
const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <div id={id} className="scroll-mt-20">
    <h2 className="text-xl font-bold text-gray-900 mb-1">{children}</h2>
    <Separator className="mb-6" />
  </div>
);

const SubSection = ({ title, source, children }: { title: string; source: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <h3 className="text-sm font-bold text-gray-800">{title}</h3>
      <span className="text-[10px] font-mono bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{source}</span>
    </div>
    <div className="border border-gray-200 rounded-xl p-5 bg-white">{children}</div>
  </div>
);

const CodeLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] font-mono bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{children}</span>
);

// ─── Nav sections ───────────────────────────────────
const sections = [
  { id: 'tokens', label: 'Design Tokens' },
  { id: 'buttons', label: 'Botones' },
  { id: 'badges', label: 'Badges' },
  { id: 'cards', label: 'Cards' },
  { id: 'inputs', label: 'Inputs y Formularios' },
  { id: 'overlays', label: 'Overlays y Modales' },
  { id: 'navigation', label: 'Navegación' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'data', label: 'Data Display' },
  { id: 'custom-pwa', label: 'Patrones Custom PWA' },
  { id: 'custom-op', label: 'Patrones Custom Operador' },
  { id: 'custom-web', label: 'Patrones Custom Web' },
  { id: 'icons', label: 'Iconografía' },
];

// ─── Main Component ─────────────────────────────────
export default function ComponentShowcase() {
  const navigate = useNavigate();
  const [demoProgress, setDemoProgress] = useState(65);
  const [demoSlider, setDemoSlider] = useState([40]);
  const [demoSwitch, setDemoSwitch] = useState(true);
  const [demoCheck1, setDemoCheck1] = useState(true);
  const [demoCheck2, setDemoCheck2] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [demoTextarea, setDemoTextarea] = useState('');
  const [demoSelect, setDemoSelect] = useState('');
  const [chipActive, setChipActive] = useState('todos');
  const [wizardStep, setWizardStep] = useState(1);
  const [sosBounce, setSosBounce] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-xs font-medium">Volver</span>
            </button>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#001C55] rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 leading-none">SafeCampus UI Kit</div>
                <div className="text-[10px] text-gray-400">Documentación de Componentes</div>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-mono">v1.0 · shadcn/ui + Tailwind + Custom</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Side nav */}
        <nav className="hidden lg:block w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r border-gray-200 bg-white overflow-y-auto py-4 px-3">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Secciones</div>
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block px-3 py-1.5 text-xs font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Content */}
        <main className="flex-1 min-w-0 px-6 py-8 space-y-12">

          {/* ════════════════════ 1. DESIGN TOKENS ════════════════════ */}
          <section>
            <SectionTitle id="tokens">1. Design Tokens</SectionTitle>

            <SubSection title="Paleta de Colores de Marca" source="theme.css + páginas">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'Navy Principal', hex: '#001C55', tw: 'bg-[#001C55]', text: 'text-white' },
                  { name: 'Azul Secundario', hex: '#003087', tw: 'bg-[#003087]', text: 'text-white' },
                  { name: 'Rojo PUCP', hex: '#C8102E', tw: 'bg-[#C8102E]', text: 'text-white' },
                  { name: 'Primary Token', hex: '#030213', tw: 'bg-[#030213]', text: 'text-white' },
                  { name: 'Dark Base', hex: '#0d1117', tw: 'bg-[#0d1117]', text: 'text-white' },
                  { name: 'Dark Surface', hex: '#161b22', tw: 'bg-[#161b22]', text: 'text-white' },
                  { name: 'WhatsApp', hex: '#25D366', tw: 'bg-[#25D366]', text: 'text-white' },
                  { name: 'Destructive', hex: '#d4183d', tw: 'bg-[#d4183d]', text: 'text-white' },
                ].map(c => (
                  <div key={c.hex} className="rounded-xl overflow-hidden border border-gray-200">
                    <div className={`${c.tw} ${c.text} h-16 flex items-end p-2`}>
                      <span className="text-[10px] font-mono opacity-80">{c.hex}</span>
                    </div>
                    <div className="px-2 py-1.5 bg-white">
                      <div className="text-xs font-semibold text-gray-800">{c.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Colores de Severidad" source="mockData.ts · severityConfig">
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Crítico', color: 'bg-red-500', hex: '#EF4444' },
                  { label: 'Alto', color: 'bg-orange-400', hex: '#FB923C' },
                  { label: 'Medio', color: 'bg-amber-400', hex: '#FBBF24' },
                  { label: 'Bajo', color: 'bg-green-500', hex: '#22C55E' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5">
                    <div className={`w-3 h-3 rounded-full ${s.color}`} />
                    <span className="text-xs font-semibold text-gray-700">{s.label}</span>
                    <span className="text-[10px] font-mono text-gray-400">{s.hex}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Colores de Estado" source="mockData.ts · statusBadgeColor">
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Nuevo', bg: 'bg-blue-100 text-blue-700' },
                  { label: 'En atención', bg: 'bg-amber-100 text-amber-700' },
                  { label: 'Pendiente', bg: 'bg-orange-100 text-orange-700' },
                  { label: 'Resuelto', bg: 'bg-green-100 text-green-700' },
                  { label: 'Cerrado', bg: 'bg-gray-100 text-gray-600' },
                ].map(s => (
                  <span key={s.label} className={`text-xs font-bold px-3 py-1 rounded-full ${s.bg}`}>{s.label}</span>
                ))}
              </div>
            </SubSection>

            <SubSection title="Colores de Roles" source="Login.tsx · WebAdmin.tsx">
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Comunidad', bg: 'bg-blue-50 text-blue-600 border-blue-200', dot: 'bg-blue-500' },
                  { label: 'Operador', bg: 'bg-orange-50 text-orange-600 border-orange-200', dot: 'bg-orange-500' },
                  { label: 'Supervisor', bg: 'bg-green-50 text-green-600 border-green-200', dot: 'bg-green-500' },
                  { label: 'Admin', bg: 'bg-purple-50 text-purple-600 border-purple-200', dot: 'bg-purple-500' },
                ].map(r => (
                  <span key={r.label} className={`text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${r.bg}`}>
                    <div className={`w-2 h-2 rounded-full ${r.dot}`} />
                    {r.label}
                  </span>
                ))}
              </div>
            </SubSection>

            <SubSection title="Tipografía (Escala Tailwind usada)" source="Todas las páginas">
              <div className="space-y-3">
                {[
                  { cls: 'text-3xl font-bold', label: 'text-3xl · 30px · Reloj operador' },
                  { cls: 'text-2xl font-bold', label: 'text-2xl · 24px · Timer, valores destac.' },
                  { cls: 'text-xl font-bold', label: 'text-xl · 20px · Stats, KPIs grandes' },
                  { cls: 'text-lg font-bold', label: 'text-lg · 18px · Títulos de sección (h2)' },
                  { cls: 'text-base font-semibold', label: 'text-base · 16px · Botones primarios' },
                  { cls: 'text-sm font-semibold', label: 'text-sm · 14px · Cards, subtítulos' },
                  { cls: 'text-xs font-medium', label: 'text-xs · 12px · Body principal (PWA)' },
                  { cls: 'text-[11px] font-normal', label: 'text-[11px] · Notificaciones' },
                  { cls: 'text-[10px] font-semibold', label: 'text-[10px] · Labels de tabs, meta' },
                  { cls: 'text-[9px] font-bold', label: 'text-[9px] · Badges compactos' },
                ].map(t => (
                  <div key={t.label} className="flex items-baseline gap-4">
                    <span className={`${t.cls} text-gray-900 w-48 shrink-0`}>SafeCampus</span>
                    <span className="text-[11px] text-gray-400 font-mono">{t.label}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Border Radius" source="Componentes y páginas">
              <div className="flex gap-4 flex-wrap items-end">
                {[
                  { cls: 'rounded-md', label: 'rounded-md (6px)', size: 'w-14 h-14' },
                  { cls: 'rounded-lg', label: 'rounded-lg (8px)', size: 'w-14 h-14' },
                  { cls: 'rounded-xl', label: 'rounded-xl (12px)', size: 'w-14 h-14' },
                  { cls: 'rounded-2xl', label: 'rounded-2xl (16px)', size: 'w-16 h-16' },
                  { cls: 'rounded-3xl', label: 'rounded-3xl (24px)', size: 'w-16 h-16' },
                  { cls: 'rounded-full', label: 'rounded-full', size: 'w-14 h-14' },
                ].map(r => (
                  <div key={r.label} className="flex flex-col items-center gap-1.5">
                    <div className={`${r.size} bg-[#001C55] ${r.cls}`} />
                    <span className="text-[10px] text-gray-500 font-mono">{r.label}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Sombras" source="Páginas">
              <div className="flex gap-5 flex-wrap">
                {[
                  { cls: 'shadow-sm', label: 'shadow-sm · Cards' },
                  { cls: 'shadow-md', label: 'shadow-md · Alerts' },
                  { cls: 'shadow-lg', label: 'shadow-lg · CTAs' },
                  { cls: 'shadow-xl', label: 'shadow-xl · Modales' },
                  { cls: 'shadow-2xl', label: 'shadow-2xl · Frame' },
                ].map(s => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <div className={`w-20 h-20 bg-white rounded-xl border border-gray-100 ${s.cls}`} />
                    <span className="text-[10px] text-gray-500 font-mono">{s.label}</span>
                  </div>
                ))}
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 2. BUTTONS ════════════════════ */}
          <section>
            <SectionTitle id="buttons">2. Botones</SectionTitle>

            <SubSection title="shadcn/ui Button — Variantes" source="components/ui/button.tsx">
              <div className="space-y-4">
                <div className="flex gap-3 flex-wrap items-center">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex gap-3 flex-wrap items-center">
                  <Button size="sm"><Plus className="w-3 h-3" /> Small</Button>
                  <Button size="default"><Plus className="w-4 h-4" /> Default</Button>
                  <Button size="lg"><Plus className="w-4 h-4" /> Large</Button>
                  <Button size="icon"><Plus /></Button>
                </div>
                <div className="flex gap-3 flex-wrap items-center">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Botones Custom del Proyecto — Tema Claro (PWA)" source="PWAReportar.tsx · PWAHome.tsx">
              <div className="space-y-3">
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-[#001C55] text-white px-6 py-3 rounded-xl text-xs font-semibold hover:bg-[#002580] transition-colors flex items-center gap-2">
                    <Navigation className="w-4 h-4" /> Primario PWA
                  </button>
                  <button className="border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-colors">
                    Secundario PWA
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-red-200">
                    <AlertTriangle className="w-4 h-4" /> SOS Emergencia
                  </button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-green-600 text-white px-6 py-3.5 rounded-2xl text-sm font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Confirmar acción
                  </button>
                  <button className="bg-gray-200 text-gray-400 px-6 py-3 rounded-2xl text-xs font-bold cursor-not-allowed">
                    Deshabilitado
                  </button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Botones Custom — Tema Oscuro (Operador)" source="OperadorDashboard.tsx">
              <div className="bg-[#0d1117] rounded-2xl p-5 space-y-3">
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-xs font-bold hover:bg-orange-600 transition-colors flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Primario Operador
                  </button>
                  <button className="border border-gray-700 text-gray-300 px-6 py-3 rounded-2xl text-xs font-semibold hover:border-gray-500 transition-colors bg-[#161b22]">
                    Secundario Operador
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 animate-pulse">
                    <Megaphone className="w-4 h-4" /> Emergencia
                  </button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-green-600 text-white px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Marcar resuelto
                  </button>
                  <button className="text-gray-500 text-[10px] border border-gray-700 px-3 py-1.5 rounded-lg hover:border-gray-500 transition-colors">
                    Mini action
                  </button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Botón SOS — Simulación Interactiva" source="PWAHome.tsx · PWAAcompanamiento.tsx">
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => { setSosBounce(true); setTimeout(() => setSosBounce(false), 600); }}
                  className={`bg-red-600 text-white py-4 px-8 rounded-2xl font-bold text-base flex items-center gap-3 shadow-lg shadow-red-200 transition-transform ${sosBounce ? 'scale-95' : 'hover:scale-[1.02]'}`}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  EMERGENCIA SOS
                </button>
                <span className="text-[10px] text-gray-400">Click para ver efecto de presión (active:scale)</span>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 3. BADGES ════════════════════ */}
          <section>
            <SectionTitle id="badges">3. Badges</SectionTitle>

            <SubSection title="shadcn/ui Badge — Variantes" source="components/ui/badge.tsx">
              <div className="flex gap-3 flex-wrap">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </SubSection>

            <SubSection title="Badges Custom de Estado (tema claro)" source="WebCasos.tsx · PWAMisCasos.tsx">
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">NUEVO</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">EN ATENCIÓN</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">PENDIENTE</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700">RESUELTO</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">CERRADO</span>
              </div>
            </SubSection>

            <SubSection title="Badges Custom de Estado (tema oscuro — Operador)" source="OperadorIncidentes.tsx">
              <div className="bg-[#0d1117] rounded-2xl p-4 flex gap-2 flex-wrap">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">NUEVO</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">EN ATENCIÓN</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">PENDIENTE</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">RESUELTO</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400">CERRADO</span>
              </div>
            </SubSection>

            <SubSection title="Severity Dots" source="OperadorDashboard.tsx · WebDashboard.tsx">
              <div className="flex gap-4 flex-wrap items-center">
                {[
                  { label: 'Crítico', color: 'bg-red-500', pulse: true },
                  { label: 'Alto', color: 'bg-orange-400', pulse: false },
                  { label: 'Medio', color: 'bg-amber-400', pulse: false },
                  { label: 'Bajo', color: 'bg-green-500', pulse: false },
                ].map(d => (
                  <div key={d.label} className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${d.color} ${d.pulse ? 'animate-pulse' : ''}`} />
                    <span className="text-xs text-gray-600">{d.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2">El dot de "Crítico" usa animate-pulse para indicar urgencia.</p>
            </SubSection>

            <SubSection title="Notification Badge" source="WebLayout.tsx · PWAPerfil.tsx">
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold text-white bg-red-500 w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </div>
                <span className="text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">5 nuevas</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-[10px] text-gray-400">← Unread indicator</span>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 4. CARDS ════════════════════ */}
          <section>
            <SectionTitle id="cards">4. Cards</SectionTitle>

            <SubSection title="shadcn/ui Card" source="components/ui/card.tsx">
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Título de Card</CardTitle>
                    <CardDescription>Descripción breve del contenido de la card.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Contenido principal aquí. Las cards de shadcn/ui usan tokens semánticos (bg-card, text-card-foreground).</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Cancelar</Button>
                    <Button size="sm">Guardar</Button>
                  </CardFooter>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle>Card con borde de severidad</CardTitle>
                    <CardDescription>Patrón usado en listas de incidentes.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-red-600">INC-2026-001</span>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">CRÍTICO</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SubSection>

            <SubSection title="Card Pattern PWA (tema claro)" source="PWAHome.tsx · PWAMisCasos.tsx">
              <div className="max-w-sm space-y-3">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-2 h-2 bg-amber-400 rounded-full" />
                        <span className="text-[10px] font-mono text-gray-400">INC-2026-003</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">EN ATENCIÓN</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-800 line-clamp-1">Robo de laptop en Biblioteca Central</div>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400">
                        <MapPin className="w-3 h-3" /> Zona Central · 14:30
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-400">Patrón: bg-white rounded-2xl border border-gray-100 shadow-sm</p>
              </div>
            </SubSection>

            <SubSection title="Card Pattern Operador (tema oscuro)" source="OperadorDashboard.tsx · OperadorIncidentes.tsx">
              <div className="max-w-sm bg-[#0d1117] rounded-2xl p-4 space-y-3">
                <div className="bg-[#161b22] rounded-2xl p-4 border-l-4 border-l-red-500 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1 shrink-0 animate-pulse" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-gray-500 text-[10px] font-mono">INC-2026-001</span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">CRÍTICO</span>
                      </div>
                      <div className="text-white text-sm font-semibold line-clamp-1">Intento de robo en Estacionamiento</div>
                      <div className="flex items-center gap-1 mt-1 text-gray-500 text-[10px]">
                        <MapPin className="w-3 h-3" /> Zona Ciencias · 08:45
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-500">Patrón: bg-[#161b22] rounded-2xl border border-gray-800 + border-l severity</p>
              </div>
            </SubSection>

            <SubSection title="KPI Card" source="WebDashboard.tsx · WebKPIs.tsx">
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Total Incidentes', value: '24', icon: FileText, color: 'text-blue-500 bg-blue-50', trend: '+12%', trendColor: 'text-green-500' },
                  { label: 'Tiempo de Respuesta', value: '3.8m', icon: Clock, color: 'text-amber-500 bg-amber-50', trend: '-8%', trendColor: 'text-green-500' },
                  { label: 'Casos Críticos', value: '3', icon: AlertTriangle, color: 'text-red-500 bg-red-50', trend: '+2', trendColor: 'text-red-500' },
                ].map(k => (
                  <div key={k.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${k.color}`}>
                        <k.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold ${k.trendColor}`}>{k.trend}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{k.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{k.label}</div>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Hero / Banner Card" source="PWAHome.tsx · PWAAcompanamiento.tsx">
              <div className="max-w-sm">
                <div className="bg-gradient-to-br from-[#001C55] to-[#003087] rounded-3xl p-6 text-white text-center">
                  <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-2">Banner Hero</h3>
                  <p className="text-blue-200 text-xs leading-relaxed">Usado en pantallas de inicio y acompañamiento con gradiente institucional.</p>
                </div>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 5. INPUTS & FORMS ════════════════════ */}
          <section>
            <SectionTitle id="inputs">5. Inputs y Formularios</SectionTitle>

            <SubSection title="shadcn/ui Input + Label + Textarea + Select" source="components/ui/">
              <div className="max-w-md space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-in">Email institucional</Label>
                  <Input id="demo-in" type="email" placeholder="usuario@pucp.edu.pe" value={demoInput} onChange={e => setDemoInput(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="demo-ta">Descripción</Label>
                  <Textarea id="demo-ta" placeholder="Describe lo que ocurrió..." value={demoTextarea} onChange={e => setDemoTextarea(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label>Zona del campus</Label>
                  <Select value={demoSelect} onValueChange={setDemoSelect}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una zona..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central">Zona Central</SelectItem>
                      <SelectItem value="ciencias">Zona Ciencias</SelectItem>
                      <SelectItem value="letras">Zona Letras</SelectItem>
                      <SelectItem value="deportes">Zona Deportiva</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Input deshabilitado</Label>
                  <Input disabled placeholder="Campo no editable" />
                </div>
              </div>
            </SubSection>

            <SubSection title="Checkbox y Switch" source="components/ui/checkbox.tsx · switch.tsx">
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-3">
                  <Checkbox id="c1" checked={demoCheck1} onCheckedChange={(v) => setDemoCheck1(v === true)} />
                  <Label htmlFor="c1">Notificaciones push activadas</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="c2" checked={demoCheck2} onCheckedChange={(v) => setDemoCheck2(v === true)} />
                  <Label htmlFor="c2">Compartir ubicación en tiempo real</Label>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label>Modo oscuro</Label>
                  <Switch checked={demoSwitch} onCheckedChange={setDemoSwitch} />
                </div>
                <p className="text-[10px] text-gray-400">Switch estado: {demoSwitch ? 'Activado' : 'Desactivado'}</p>
              </div>
            </SubSection>

            <SubSection title="Slider" source="components/ui/slider.tsx">
              <div className="max-w-md space-y-2">
                <Label>Duración estimada: {demoSlider[0]} min</Label>
                <Slider value={demoSlider} onValueChange={setDemoSlider} min={5} max={60} step={5} />
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>5 min</span>
                  <span>60 min</span>
                </div>
              </div>
            </SubSection>

            <SubSection title="Inputs Custom PWA (tema claro)" source="PWAReportar.tsx · PWALostFound.tsx">
              <div className="max-w-sm space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Descripción del incidente</label>
                  <textarea
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#001C55] bg-gray-50 resize-none"
                    rows={3}
                    placeholder="Detalla lo que ocurrió..."
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Ubicación</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#001C55] bg-gray-50"
                      placeholder="Buscar ubicación..."
                    />
                  </div>
                </div>
              </div>
            </SubSection>

            <SubSection title="Inputs Custom Operador (tema oscuro)" source="OperadorIncidentes.tsx">
              <div className="max-w-sm bg-[#0d1117] rounded-2xl p-4 space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-[#161b22] border border-gray-800 rounded-2xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Buscar por ID o título..."
                  />
                </div>
                <textarea
                  className="w-full bg-[#161b22] border border-gray-700 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 resize-none"
                  rows={3}
                  placeholder="Escribe una actualización operativa..."
                />
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 6. OVERLAYS ════════════════════ */}
          <section>
            <SectionTitle id="overlays">6. Overlays y Modales</SectionTitle>

            <SubSection title="Dialog (shadcn/ui)" source="components/ui/dialog.tsx">
              <div className="flex gap-3 flex-wrap">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Abrir Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirmar acción</DialogTitle>
                      <DialogDescription>¿Estás seguro de que quieres escalar este incidente al supervisor?</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button>Confirmar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Dialog Destructivo</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Cerrar incidente</DialogTitle>
                      <DialogDescription>Esta acción marcará el incidente como cerrado y no podrá reabrirse.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button variant="destructive">Cerrar incidente</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </SubSection>

            <SubSection title="Sheet (Panel lateral)" source="components/ui/sheet.tsx">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Abrir Sheet →</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Detalle del Incidente</SheetTitle>
                    <SheetDescription>INC-2026-003 · Robo de laptop</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Estado</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">EN ATENCIÓN</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Severidad</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="font-medium">Alto</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Zona</span>
                      <span className="font-medium">Zona Central</span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </SubSection>

            <SubSection title="Popover" source="components/ui/popover.tsx">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm"><Info className="w-3 h-3" /> Info Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold">Tiempo de Respuesta (FRT)</h4>
                    <p className="text-xs text-gray-500">Promedio de tiempo desde la creación del ticket hasta la primera respuesta del operador.</p>
                    <p className="text-xs text-gray-500">Meta SLA: {"<"} 5 minutos para críticos.</p>
                  </div>
                </PopoverContent>
              </Popover>
            </SubSection>

            <SubSection title="Tooltip" source="components/ui/tooltip.tsx">
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon"><Eye className="w-4 h-4" /></Button>
                  </TooltipTrigger>
                  <TooltipContent>Ver detalle</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon"><Edit className="w-4 h-4" /></Button>
                  </TooltipTrigger>
                  <TooltipContent>Editar</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon"><Trash2 className="w-4 h-4" /></Button>
                  </TooltipTrigger>
                  <TooltipContent>Eliminar</TooltipContent>
                </Tooltip>
              </div>
            </SubSection>

            <SubSection title="Dropdown Menu" source="components/ui/dropdown-menu.tsx">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Acciones <ChevronRight className="w-3 h-3 rotate-90" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Eye className="w-4 h-4" /> Ver detalle</DropdownMenuItem>
                  <DropdownMenuItem><Edit className="w-4 h-4" /> Editar</DropdownMenuItem>
                  <DropdownMenuItem><User className="w-4 h-4" /> Reasignar</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive"><Trash2 className="w-4 h-4" /> Eliminar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SubSection>
          </section>

          {/* ════════════════════ 7. NAVIGATION ════════════════════ */}
          <section>
            <SectionTitle id="navigation">7. Patrones de Navegación</SectionTitle>

            <SubSection title="Tabs (shadcn/ui)" source="components/ui/tabs.tsx">
              <Tabs defaultValue="general">
                <TabsList>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
                  <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-3">
                  <p className="text-sm text-gray-600">Contenido de la pestaña General. Tabs shadcn/ui usando Radix para accesibilidad.</p>
                </TabsContent>
                <TabsContent value="seguridad" className="mt-3">
                  <p className="text-sm text-gray-600">Contenido de la pestaña Seguridad.</p>
                </TabsContent>
                <TabsContent value="notificaciones" className="mt-3">
                  <p className="text-sm text-gray-600">Contenido de la pestaña Notificaciones.</p>
                </TabsContent>
              </Tabs>
            </SubSection>

            <SubSection title="Bottom Tab Bar — PWA" source="PWALayout.tsx">
              <div className="max-w-[430px] mx-auto">
                <div className="bg-white rounded-2xl border border-gray-200 flex shadow-lg">
                  {[
                    { icon: Shield, label: 'Inicio', active: true },
                    { icon: AlertTriangle, label: 'Reportar', active: false },
                    { icon: FileText, label: 'Mis casos', active: false },
                    { icon: Search, label: 'Lost & Found', active: false },
                    { icon: User, label: 'Perfil', active: false },
                  ].map(item => (
                    <div key={item.label} className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 ${item.active ? 'text-[#001C55]' : 'text-gray-400'}`}>
                      <div className={`p-1.5 rounded-xl ${item.active ? 'bg-[#001C55]/10' : ''}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 text-center mt-2">Activo: text-[#001C55] + bg-[#001C55]/10</p>
              </div>
            </SubSection>

            <SubSection title="Bottom Tab Bar — Operador (oscuro)" source="OperadorLayout.tsx">
              <div className="max-w-[430px] mx-auto">
                <div className="bg-[#161b22] rounded-2xl border border-gray-700 flex">
                  {[
                    { icon: Shield, label: 'Dashboard', active: true },
                    { icon: FileText, label: 'Incidentes', active: false },
                    { icon: MapPin, label: 'Mapa', active: false },
                    { icon: User, label: 'Perfil', active: false },
                  ].map(item => (
                    <div key={item.label} className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 ${item.active ? 'text-orange-400' : 'text-gray-600'}`}>
                      <div className={`p-1.5 rounded-xl ${item.active ? 'bg-orange-500/15' : ''}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-2">Activo: text-orange-400 + bg-orange-500/15</p>
              </div>
            </SubSection>

            <SubSection title="Filter Chips" source="OperadorIncidentes.tsx · PWALostFound.tsx">
              <div className="space-y-3">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {['Todos', 'Nuevo', 'En atención', 'Pendiente', 'Resuelto'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => setChipActive(opt.toLowerCase())}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all shrink-0 ${chipActive === opt.toLowerCase() ? 'bg-[#001C55] text-white border-[#001C55]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400">Click en los chips para ver el cambio de estado activo/inactivo.</p>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 8. FEEDBACK ════════════════════ */}
          <section>
            <SectionTitle id="feedback">8. Feedback</SectionTitle>

            <SubSection title="Alert (shadcn/ui)" source="components/ui/alert.tsx">
              <div className="space-y-3">
                <Alert>
                  <Info className="w-4 h-4" />
                  <AlertTitle>Información</AlertTitle>
                  <AlertDescription>Tu reporte ha sido recibido. El equipo de seguridad lo revisará en breve.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTriangle className="w-4 h-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>No se pudo enviar el reporte. Verifica tu conexión e intenta nuevamente.</AlertDescription>
                </Alert>
              </div>
            </SubSection>

            <SubSection title="Progress" source="components/ui/progress.tsx">
              <div className="max-w-md space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Progreso de carga</Label>
                    <span className="text-xs font-mono text-gray-500">{demoProgress}%</span>
                  </div>
                  <Progress value={demoProgress} />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => setDemoProgress(p => Math.max(0, p - 10))}>-10</Button>
                  <Button size="sm" variant="outline" onClick={() => setDemoProgress(p => Math.min(100, p + 10))}>+10</Button>
                  <Button size="sm" variant="outline" onClick={() => setDemoProgress(0)}>Reset</Button>
                  <Button size="sm" onClick={() => setDemoProgress(100)}>100%</Button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Skeleton (Loading)" source="components/ui/skeleton.tsx">
              <div className="max-w-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-20 w-full rounded-xl" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20 rounded-lg" />
                  <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
              </div>
            </SubSection>

            <SubSection title="Empty States" source="PWAMisCasos.tsx · OperadorIncidentes.tsx">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center py-8 text-center bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="text-sm font-semibold text-gray-600">No tienes casos registrados</div>
                  <div className="text-xs text-gray-400 mt-1">Tus reportes aparecerán aquí</div>
                </div>
                <div className="flex flex-col items-center py-8 text-center bg-[#0d1117] rounded-2xl border border-gray-800">
                  <div className="text-4xl mb-3">📭</div>
                  <div className="text-sm font-semibold text-gray-400">Sin incidentes</div>
                  <div className="text-xs text-gray-600 mt-1">Prueba con otros filtros</div>
                </div>
              </div>
            </SubSection>

            <SubSection title="Animaciones de Feedback" source="Varias páginas">
              <div className="flex gap-6 items-center flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-gray-500">animate-pulse</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-[10px] text-gray-500">animate-ping</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="bg-[#001C55] text-white px-4 py-2 rounded-xl text-xs active:scale-95 transition-transform">
                    Press me
                  </button>
                  <span className="text-[10px] text-gray-500">active:scale-95</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30" />
                  </div>
                  <span className="text-[10px] text-gray-500">Radar (mapa)</span>
                </div>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 9. DATA DISPLAY ════════════════════ */}
          <section>
            <SectionTitle id="data">9. Data Display</SectionTitle>

            <SubSection title="Table (shadcn/ui)" source="components/ui/table.tsx">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Severidad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Zona</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'INC-001', title: 'Intento de robo en estacionamiento', sev: 'Crítico', sevColor: 'bg-red-100 text-red-700', status: 'Nuevo', statusColor: 'bg-blue-100 text-blue-700', zone: 'Ciencias' },
                    { id: 'INC-002', title: 'Persona sospechosa en Pabellón H', sev: 'Alto', sevColor: 'bg-orange-100 text-orange-700', status: 'En atención', statusColor: 'bg-amber-100 text-amber-700', zone: 'Central' },
                    { id: 'INC-003', title: 'Robo de laptop en Biblioteca', sev: 'Alto', sevColor: 'bg-orange-100 text-orange-700', status: 'Resuelto', statusColor: 'bg-green-100 text-green-700', zone: 'Central' },
                  ].map(row => (
                    <TableRow key={row.id}>
                      <TableCell className="font-mono text-xs">{row.id}</TableCell>
                      <TableCell className="font-medium">{row.title}</TableCell>
                      <TableCell><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.sevColor}`}>{row.sev}</span></TableCell>
                      <TableCell><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.statusColor}`}>{row.status}</span></TableCell>
                      <TableCell className="text-gray-500">{row.zone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </SubSection>

            <SubSection title="Accordion (shadcn/ui)" source="components/ui/accordion.tsx">
              <Accordion type="single" collapsible className="max-w-md">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cómo reportar un incidente?</AccordionTrigger>
                  <AccordionContent>
                    Desde la app, accede a "Reportar", selecciona el tipo de incidente, agrega una descripción y tu ubicación. El equipo de seguridad recibirá una notificación inmediata.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Qué es el acompañamiento seguro?</AccordionTrigger>
                  <AccordionContent>
                    Es un servicio que permite monitorear tu recorrido dentro del campus. Si no confirmas tu llegada dentro del tiempo estimado, seguridad recibe una alerta automática.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cómo funciona el SOS?</AccordionTrigger>
                  <AccordionContent>
                    El botón SOS envía una alerta inmediata al equipo de seguridad con tu ubicación en tiempo real. Solo úsalo en emergencias reales.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SubSection>

            <SubSection title="Avatar" source="components/ui/avatar.tsx">
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-orange-500/20 text-orange-600 font-bold text-sm">JS</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-[#001C55] text-white font-bold text-sm">LF</AvatarFallback>
                </Avatar>
                <Avatar className="size-14">
                  <AvatarFallback className="bg-green-50 text-green-600 font-bold text-lg">AT</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2 ml-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs font-bold">WA</div>
                  <span className="text-[10px] text-gray-400">WhatsApp avatar custom</span>
                </div>
              </div>
            </SubSection>

            <SubSection title="ScrollArea" source="components/ui/scroll-area.tsx">
              <ScrollArea className="h-40 w-full max-w-sm rounded-xl border">
                <div className="p-4 space-y-3">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <div>
                        <div className="text-sm font-medium">Evento #{i + 1}</div>
                        <div className="text-xs text-gray-400">Hace {i + 1} minutos</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </SubSection>
          </section>

          {/* ════════════════════ 10. CUSTOM PWA ════════════════════ */}
          <section>
            <SectionTitle id="custom-pwa">10. Patrones Custom — PWA</SectionTitle>

            <SubSection title="Wizard de Pasos (Reportar)" source="PWAReportar.tsx">
              <div className="max-w-sm space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`flex-1 h-1.5 rounded-full transition-colors ${s <= wizardStep ? 'bg-[#001C55]' : 'bg-gray-200'}`} />
                  ))}
                </div>
                <div className="text-center py-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-3xl mb-2">{wizardStep === 1 ? '📋' : wizardStep === 2 ? '📝' : '📍'}</div>
                  <div className="text-sm font-bold text-gray-800">
                    Paso {wizardStep}: {wizardStep === 1 ? 'Tipo de incidente' : wizardStep === 2 ? 'Detalle' : 'Ubicación'}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setWizardStep(s => Math.max(1, s - 1))} disabled={wizardStep === 1}>Anterior</Button>
                  <Button size="sm" className="flex-1" onClick={() => setWizardStep(s => Math.min(3, s + 1))} disabled={wizardStep === 3}>Siguiente</Button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Grid de Tipo de Incidente" source="PWAReportar.tsx">
              <div className="grid grid-cols-3 gap-2 max-w-sm">
                {[
                  { emoji: '🚨', label: 'Robo', selected: true },
                  { emoji: '🚗', label: 'Accidente', selected: false },
                  { emoji: '🔥', label: 'Incendio', selected: false },
                  { emoji: '👊', label: 'Violencia', selected: false },
                  { emoji: '🏥', label: 'Emergencia', selected: false },
                  { emoji: '💥', label: 'Vandalismo', selected: false },
                ].map(t => (
                  <div key={t.label} className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 cursor-pointer transition-all ${t.selected ? 'border-[#001C55] bg-blue-50' : 'border-gray-100 bg-gray-50 hover:border-gray-300'}`}>
                    <span className="text-2xl">{t.emoji}</span>
                    <span className={`text-xs font-semibold ${t.selected ? 'text-[#001C55]' : 'text-gray-600'}`}>{t.label}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Severity Selector" source="PWAReportar.tsx">
              <div className="max-w-sm grid grid-cols-3 gap-2">
                {[
                  { label: 'Crítico', sublabel: 'Peligro inmediato', color: 'border-red-400 bg-red-50 text-red-600', selected: true },
                  { label: 'Alto', sublabel: 'Urgente', color: 'border-orange-300 bg-orange-50 text-orange-600', selected: false },
                  { label: 'Medio', sublabel: 'Importante', color: 'border-amber-300 bg-amber-50 text-amber-600', selected: false },
                ].map(s => (
                  <div key={s.label} className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${s.selected ? s.color : 'border-gray-200 text-gray-500'}`}>
                    <div className="text-xs font-bold">{s.label}</div>
                    <div className="text-[10px] mt-0.5">{s.sublabel}</div>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Timer Circular (Acompañamiento)" source="PWAAcompanamiento.tsx">
              <div className="flex flex-col items-center">
                <svg width="140" height="140" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                  <circle
                    cx="80" cy="80" r="60" fill="none"
                    stroke="#001C55" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 60}
                    strokeDashoffset={2 * Math.PI * 60 * 0.35}
                    transform="rotate(-90 80 80)"
                  />
                  <text x="80" y="78" textAnchor="middle" fill="#111" fontSize="22" fontWeight="bold">09:45</text>
                  <text x="80" y="96" textAnchor="middle" fill="#9ca3af" fontSize="10">restante</text>
                </svg>
                <p className="text-[10px] text-gray-400 mt-2">SVG circumference-based timer con strokeDasharray/offset</p>
              </div>
            </SubSection>

            <SubSection title="Phone Frame Wrapper" source="PWALayout.tsx · OperadorLayout.tsx">
              <div className="flex justify-center">
                <div className="w-[220px] bg-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="flex items-center justify-between px-4 pt-2 pb-1">
                    <span className="text-[9px] text-gray-500 font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-gray-400 rounded-sm flex items-center px-0.5">
                        <div className="w-2.5 h-1 bg-green-500 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-white flex items-center gap-2 border-b border-gray-100">
                    <div className="w-5 h-5 bg-[#001C55] rounded-md flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-[#001C55]">SafeCampus</span>
                  </div>
                  <div className="h-32 bg-gray-50 flex items-center justify-center">
                    <span className="text-[10px] text-gray-400">Contenido</span>
                  </div>
                  <div className="bg-white border-t border-gray-200 flex px-2 py-1.5">
                    {['🏠', '📝', '📋', '🔍', '👤'].map((e, i) => (
                      <div key={i} className={`flex-1 text-center text-[10px] ${i === 0 ? 'text-[#001C55]' : 'text-gray-400'}`}>{e}</div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-3">max-w-[430px] · Simula frame de dispositivo móvil para PWA y Operador</p>
            </SubSection>
          </section>

          {/* ════════════════════ 11. CUSTOM OPERATOR ════════════════════ */}
          <section>
            <SectionTitle id="custom-op">11. Patrones Custom — Operador</SectionTitle>

            <SubSection title="Quick Action Buttons" source="OperadorDashboard.tsx">
              <div className="bg-[#0d1117] rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <button className="bg-orange-500 rounded-2xl p-4 flex items-center gap-3 active:scale-[0.97] transition-transform">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-sm">Nuevo caso</div>
                      <div className="text-orange-200 text-[10px]">Reporte rápido</div>
                    </div>
                  </button>
                  <button className="bg-[#161b22] border border-gray-700 rounded-2xl p-4 flex items-center gap-3 active:scale-[0.97] transition-transform">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-sm">Ver mapa</div>
                      <div className="text-gray-500 text-[10px]">Campus en vivo</div>
                    </div>
                  </button>
                </div>
              </div>
            </SubSection>

            <SubSection title="Alert Card Crítica" source="OperadorDashboard.tsx">
              <div className="bg-[#0d1117] rounded-2xl p-4 max-w-sm">
                <div className="bg-red-900/20 border border-red-500/50 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider">⚠ Crítico · INC-001</span>
                      </div>
                      <div className="text-white text-sm font-bold">Intento de robo en Estacionamiento</div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-red-300">
                        <MapPin className="w-3 h-3" /> Zona Ciencias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SubSection>

            <SubSection title="Status Card + Radio" source="OperadorDashboard.tsx · OperadorPerfil.tsx">
              <div className="bg-[#0d1117] rounded-2xl p-4 max-w-sm space-y-3">
                <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-500/15 rounded-xl flex items-center justify-center">
                      <Radio className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-xs font-bold">Canal de radio · Canal 3</div>
                      <div className="text-gray-500 text-[10px]">3 operadores activos en frecuencia</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 12. CUSTOM WEB ════════════════════ */}
          <section>
            <SectionTitle id="custom-web">12. Patrones Custom — Web Operativa</SectionTitle>

            <SubSection title="Sidebar Navigation" source="WebLayout.tsx">
              <div className="flex h-64">
                <div className="w-56 bg-[#001C55] rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
                    <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold">SafeCampus</div>
                      <div className="text-blue-300 text-[9px]">Sistema de Seguridad</div>
                    </div>
                  </div>
                  {[
                    { icon: BarChart3, label: 'Dashboard', active: true },
                    { icon: FileText, label: 'Gestión de Casos', active: false },
                    { icon: BarChart3, label: 'KPIs y Reportes', active: false },
                    { icon: MessageCircle, label: 'Chat WhatsApp', active: false },
                    { icon: Settings, label: 'Admin Sistema', active: false },
                  ].map(item => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${item.active ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white/80'}`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-sm text-gray-400">← Sidebar · bg-[#001C55]</span>
                </div>
              </div>
            </SubSection>

            <SubSection title="Chat Bubble (WhatsApp)" source="WebWhatsApp.tsx">
              <div className="max-w-sm space-y-2 bg-gray-100 rounded-2xl p-4">
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-3 py-2 max-w-[75%]">
                    <p className="text-xs text-gray-800">Hola, quiero reportar que perdí mi carnet en la biblioteca</p>
                    <div className="text-[9px] text-gray-400 text-right mt-1">10:30 AM</div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tl-md px-3 py-2 max-w-[75%]">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-[9px] font-bold text-blue-600">BOT</span>
                    </div>
                    <p className="text-xs text-gray-800">Entendido. ¿Puedes darme tu código de estudiante?</p>
                    <div className="text-[9px] text-gray-400 text-right mt-1">10:30 AM</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-100 border border-green-200 rounded-2xl rounded-tr-md px-3 py-2 max-w-[75%]">
                    <p className="text-xs text-gray-800">Mi código es 20201234</p>
                    <div className="text-[9px] text-gray-400 text-right mt-1">10:31 AM</div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">Burbujas: user (green), bot (blue), agent (white). Bordes redondeados asimétricos.</p>
            </SubSection>

            <SubSection title="Kanban Columns" source="WebCasos.tsx">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[
                  { label: 'Nuevo', color: 'bg-blue-500', count: 2 },
                  { label: 'En atención', color: 'bg-amber-500', count: 3 },
                  { label: 'Pendiente', color: 'bg-orange-500', count: 1 },
                  { label: 'Resuelto', color: 'bg-green-500', count: 4 },
                  { label: 'Cerrado', color: 'bg-gray-400', count: 2 },
                ].map(col => (
                  <div key={col.label} className="w-40 shrink-0 bg-gray-50 rounded-xl p-3 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <span className="text-xs font-bold text-gray-700">{col.label}</span>
                      <span className="text-[10px] font-mono text-gray-400 ml-auto">{col.count}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
                        <div className="text-[10px] font-mono text-gray-400">INC-00X</div>
                        <div className="text-xs font-medium text-gray-700 line-clamp-2">Incidente de ejemplo</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SubSection>
          </section>

          {/* ════════════════════ 13. ICONS ════════════════════ */}
          <section>
            <SectionTitle id="icons">13. Iconografía</SectionTitle>

            <SubSection title="lucide-react — Íconos más usados" source="lucide-react v0.487.0">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {[
                  { Icon: Shield, name: 'Shield' },
                  { Icon: MapPin, name: 'MapPin' },
                  { Icon: AlertTriangle, name: 'AlertTriangle' },
                  { Icon: CheckCircle, name: 'CheckCircle' },
                  { Icon: Clock, name: 'Clock' },
                  { Icon: Search, name: 'Search' },
                  { Icon: Bell, name: 'Bell' },
                  { Icon: Settings, name: 'Settings' },
                  { Icon: FileText, name: 'FileText' },
                  { Icon: BarChart3, name: 'BarChart3' },
                  { Icon: Eye, name: 'Eye' },
                  { Icon: Edit, name: 'Edit' },
                  { Icon: Trash2, name: 'Trash2' },
                  { Icon: Plus, name: 'Plus' },
                  { Icon: X, name: 'X' },
                  { Icon: Filter, name: 'Filter' },
                  { Icon: MessageCircle, name: 'MessageCircle' },
                  { Icon: User, name: 'User' },
                  { Icon: Mail, name: 'Mail' },
                  { Icon: Lock, name: 'Lock' },
                  { Icon: Radio, name: 'Radio' },
                  { Icon: Zap, name: 'Zap' },
                  { Icon: Navigation, name: 'Navigation' },
                  { Icon: Camera, name: 'Camera' },
                  { Icon: Megaphone, name: 'Megaphone' },
                  { Icon: Download, name: 'Download' },
                  { Icon: Upload, name: 'Upload' },
                  { Icon: Info, name: 'Info' },
                  { Icon: ChevronRight, name: 'ChevronRight' },
                  { Icon: ExternalLink, name: 'ExternalLink' },
                  { Icon: Copy, name: 'Copy' },
                  { Icon: Star, name: 'Star' },
                ].map(({ Icon, name }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                    <Icon className="w-5 h-5 text-gray-700" />
                    <span className="text-[9px] text-gray-400 font-mono">{name}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Tamaños de Ícono Estándar" source="Convención del proyecto">
              <div className="flex gap-6 items-end flex-wrap">
                {[
                  { size: 'w-3 h-3', label: '12px · Inline' },
                  { size: 'w-4 h-4', label: '16px · Default' },
                  { size: 'w-5 h-5', label: '20px · Nav/Btn' },
                  { size: 'w-6 h-6', label: '24px · Stats' },
                  { size: 'w-8 h-8', label: '32px · Featured' },
                  { size: 'w-10 h-10', label: '40px · Hero' },
                  { size: 'w-14 h-14', label: '56px · Alerta' },
                ].map(s => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <Shield className={`${s.size} text-[#001C55]`} />
                    <span className="text-[9px] text-gray-400 font-mono text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Emojis como Íconos" source="PWAReportar.tsx · PWAHome.tsx">
              <div className="flex gap-3 flex-wrap">
                {['🚨', '🚗', '🔥', '👊', '🏥', '💥', '👤', '📋', '🔍', '📦', '🛡️', '💡', '📱', '👥', '📍', '⏱️', '🆘'].map(e => (
                  <div key={e} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl border border-gray-100">{e}</div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2">Emojis Unicode usados como íconos decorativos en grids de categoría, tips y empty states.</p>
            </SubSection>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6 pb-4 text-center">
            <p className="text-xs text-gray-400">SafeCampus PUCP · UI Component Showcase</p>
            <p className="text-[10px] text-gray-300 mt-1">Generado como documentación para el equipo UI/UX. Todos los componentes están renderizados en vivo.</p>
          </div>

        </main>
      </div>
    </div>
  );
}
