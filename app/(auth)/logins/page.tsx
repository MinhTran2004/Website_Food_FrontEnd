'use client'
import AppImage from "@/component/Image/AppImage";
import Button from "./Button";
import Input from "./Input";
import { IMAGE_SOUCE } from "@/public/assets/images";

const App: React.FC = () => {

    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-orange-50/30 relative overflow-hidden font-['Plus_Jakarta_Sans']">
            {/* Decorative Vibrant Blobs */}
            <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-amber-200/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white/80 backdrop-blur-md rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(251,146,60,0.15)] overflow-hidden min-h-[750px] border border-white">

                {/* Left Side: Visual Hero Panel */}
                <div className="hidden md:flex flex-col relative bg-orange-100 overflow-hidden group">
                    <AppImage
                        src={IMAGE_SOUCE.IMG_BACKGROUD_AUTH}
                        alt="Fresh Ingredients"
                        classNameContainer="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-3000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-orange-500/40 via-transparent to-white/20"></div>

                    <div className="absolute inset-0 p-12 z-10 h-full flex flex-col justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <span className="text-orange-500 text-3xl font-black">Y</span>
                            </div>
                            <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">YumRush</span>
                        </div>

                        {/* Floating Menu Cards - Replaces the old text block */}
                        <div className="relative h-[400px] w-full mt-10">
                            {/* Card 1: Burger */}
                            <div className="absolute top-0 left-0 w-64 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white transform -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">🍔</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Classic Wagyu</h4>
                                        <div className="flex text-amber-400 text-xs">★★★★★</div>
                                    </div>
                                    <div className="ml-auto font-black text-orange-500">$12.9</div>
                                </div>
                            </div>

                            {/* Card 2: Ramen */}
                            <div className="absolute top-24 right-0 w-64 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white transform rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 delay-75">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl">🍜</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Spicy Tonkotsu</h4>
                                        <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-bold">FAST DELIVERY</span>
                                    </div>
                                    <div className="ml-auto font-black text-rose-500">$14.5</div>
                                </div>
                            </div>

                            {/* Card 3: Fries */}
                            <div className="absolute bottom-12 left-10 w-56 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white transform -rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 delay-150">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">🍟</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Truffle Fries</h4>
                                        <p className="text-[10px] text-slate-400">Popular Side</p>
                                    </div>
                                    <div className="ml-auto text-orange-500">🔥</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof Footer */}
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 flex items-center gap-4 text-white">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img key={i} className="w-8 h-8 rounded-full border-2 border-orange-400 object-cover" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                                ))}
                            </div>
                            <p className="text-xs font-bold drop-shadow-sm">
                                Join <span className="text-amber-300">50,000+</span> hungry foodies today!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Brighter Form */}
                <div className="flex flex-col p-8 md:p-20 justify-center bg-white">
                    <div className="max-w-sm w-full mx-auto">
                        {/* Logo Mobile */}
                        <div className="md:hidden flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                                <span className="text-white text-xl font-bold">Y</span>
                            </div>
                            <span className="text-2xl font-black text-slate-900 tracking-tight">YumRush</span>
                        </div>

                        <div className="mb-10">
                            <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">
                                Welcome Back
                            </h1>
                            <p className="text-slate-400 font-medium leading-relaxed">

                                Your next gourmet meal is just a few clicks away.

                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* {view === 'signup' && (
                                <Input
                                    label="Full Name"
                                    placeholder="e.g. Gordon Ramsay"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    }
                                />
                            )} */}
                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="you@email.com"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                            />
                            <div className="space-y-2">
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    }
                                />
                                <div className="text-right">
                                    <button type="button" className="text-xs font-bold text-orange-500 hover:text-rose-500 transition-colors">
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>

                            <Button type="button" className="w-full text-lg h-14 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30">
                                Sign In Now
                            </Button>

                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-100"></div>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-slate-300">
                                    <span className="bg-white px-4">Social Login</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="flex items-center justify-center py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-600 shadow-sm active:scale-95">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-3" alt="Google" />
                                    Google
                                </button>
                                <button type="button" className="flex items-center justify-center py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm text-slate-600 shadow-sm active:scale-95">
                                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5 mr-3" alt="Facebook" />
                                    Facebook
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-slate-400 text-sm font-medium">
                            Hungry for a new account?
                            <button
                                className="text-orange-500 font-black hover:text-rose-500 transition-all ml-1"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
