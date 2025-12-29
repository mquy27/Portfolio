import { useState, useEffect } from "react";

const DiscordStatus = () => {
    const [data, setData] = useState(null);
    const userId = "501301916274393089";

    useEffect(() => {
        let ws;
        let heartbeatInterval;

        const connect = () => {
            ws = new WebSocket("wss://api.lanyard.rest/socket");

            ws.onopen = () => {
                // Initial Opcode 2 (Initialize)
                ws.send(JSON.stringify({
                    op: 2,
                    d: { subscribe_to_id: userId }
                }));
            };

            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                const { t, d, op } = message;

                // Opcode 1 (Hello) - Start heartbeat
                if (op === 1) {
                    heartbeatInterval = setInterval(() => {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send(JSON.stringify({ op: 3 }));
                        }
                    }, d.heartbeat_interval);
                }

                // Opcode 0 (Event)
                if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
                    setData(d);
                }
            };

            ws.onclose = () => {
                clearInterval(heartbeatInterval);
                // Attempt reconnect after 5 seconds
                setTimeout(connect, 5000);
            };
        };

        connect();

        return () => {
            if (heartbeatInterval) clearInterval(heartbeatInterval);
            if (ws) ws.close();
        };
    }, []);

    if (!data) return (
        <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 w-fit animate-pulse">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
    );

    const statusColors = {
        online: "bg-green-500",
        idle: "bg-yellow-500",
        dnd: "bg-red-500",
        offline: "bg-gray-500",
    };

    // Check if user info is nested in discord_user or flat (Lanyard API structure can vary on init vs update)
    const user = data.discord_user || data;
    const status = data.discord_status;
    const activities = data.activities || [];
    const spotify = data.spotify;

    return (
        <div className="w-80 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Banner Area */}
            <div
                className="h-24 bg-cover bg-center relative"
                style={{
                    backgroundColor: user.banner_color || '#f3f4f6',
                    backgroundImage: user.banner ? `url(https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=600)` : undefined
                }}
            >
            </div>

            <div className="px-4 pb-4">
                <div className="flex justify-between items-end -mt-10 mb-3">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
                            <img
                                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`}
                                alt={user.username}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className={`absolute bottom-1 right-1 w-5 h-5 border-4 border-white rounded-full ${statusColors[status]}`}
                            title={status}
                        ></div>
                    </div>

                    {/* Activity Icon (if any) */}
                    {spotify ? (
                        <div className="mb-1 p-1.5 bg-[#1DB954]/10 rounded-full text-[#1DB954]" title="Listening to Spotify">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                        </div>
                    ) : null}
                </div>

                {/* User Info */}
                <div>
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">
                        {user.display_name || user.username}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">@{user.username}</p>
                </div>

                <div className="mt-3 border-t border-gray-100 pt-3">
                    {/* Activities / Status */}
                    {spotify ? (
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden shrink-0">
                                <img src={spotify.album_art_url} alt="Album Art" className="w-full h-full object-cover" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold text-green-600 mb-0.5 uppercase tracking-wide">Listening to Spotify</p>
                                <p className="text-sm font-semibold text-gray-800 truncate">{spotify.song}</p>
                                <p className="text-xs text-gray-500 truncate">by {spotify.artist}</p>
                            </div>
                        </div>
                    ) : activities.length > 0 ? (
                        <div>
                            <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
                                {activities.find(a => a.type !== 4)?.type === 0 ? "Playing" : "Activity"}
                            </p>
                            <div className="flex items-center gap-2">
                                {activities.find(a => a.type !== 4)?.assets?.large_image && (
                                    <img
                                        src={`https://cdn.discordapp.com/app-assets/${activities.find(a => a.type !== 4).application_id}/${activities.find(a => a.type !== 4).assets.large_image}.png`}
                                        alt="Game"
                                        className="w-8 h-8 rounded"
                                    />
                                )}
                                <span className="text-sm font-medium text-gray-700 truncate">
                                    {activities.find(a => a.type !== 4)?.name || activities[0].state}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-gray-500">
                            <div className={`w-2 h-2 rounded-full ${statusColors[status]}`}></div>
                            <span className="text-sm italic">
                                {status === 'dnd' ? 'Do Not Disturb' : status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscordStatus;