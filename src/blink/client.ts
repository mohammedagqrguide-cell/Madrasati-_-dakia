import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'school-track-m5x217xe',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_hMnVSeqQCAoBv-vuftXue3d6Z6UXXCsd',
  authRequired: false,
  auth: { mode: 'managed' },
})
