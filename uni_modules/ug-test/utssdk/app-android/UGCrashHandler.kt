package com.ugreen.bluetooth

import android.content.Context
import android.util.Log

class UGCrashHandler(val context: Context?) : Thread.UncaughtExceptionHandler {
    private var orginal: Thread.UncaughtExceptionHandler? = null
    var logCall: ((String) -> (Unit))? = null;

    init {
        orginal = Thread.getDefaultUncaughtExceptionHandler()
        Thread.setDefaultUncaughtExceptionHandler(this)
    }

    override fun uncaughtException(t: Thread, e: Throwable) {
        val sb = StringBuilder()
        sb.append("$t - ${e.cause}: ${e.message}")
        sb.append("\n")
        sb.append(e.stackTraceToString())
        sb.append("\n")
		Log.i(TAG, sb.toString())
        logCall?.invoke(sb.toString())
        orginal?.uncaughtException(t, e)
    }

    companion object {
        const val TAG = "NewCrashHandler"
        fun init(context: Context?, logCall: ((String) -> (Unit))?) {
            UGCrashHandler(context).apply {
                this.logCall = logCall
            }
        }
    }
}