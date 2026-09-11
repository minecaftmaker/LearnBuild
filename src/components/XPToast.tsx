export function XPToast({amount,visible}:{amount:number;visible:boolean}){if(!visible)return null;return <div className="xp-toast">✨ +{amount} XP</div>}
