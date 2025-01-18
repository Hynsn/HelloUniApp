package com.ugreen.bluetooth

// 这里是原生的包名引用
import android.app.ActivityManager
import android.content.Context
import android.content.Context.ACTIVITY_SERVICE

object NativeCode {

    fun getMemInfo(context: Context?): Array<Number> {

        val activityManager = context?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
        val memoryInfo = ActivityManager.MemoryInfo()
        activityManager.getMemoryInfo(memoryInfo)
        val availMem = memoryInfo.availMem / 1024 / 1024
        val totalMem = memoryInfo.totalMem / 1024 / 1024

        // availMem 可用内存，单位MB
        // totalMem 设备内存，单位MB
        return arrayOf(availMem, totalMem)
    }
    fun getMemInfo1(context: Context?): Array<Number> {

        val activityManager = context?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
        val memoryInfo = ActivityManager.MemoryInfo()
        activityManager.getMemoryInfo(memoryInfo)
        val availMem = memoryInfo.availMem / 1024 / 1024
        val totalMem = memoryInfo.totalMem / 1024 / 1024

        // availMem 可用内存，单位MB
        // totalMem 设备内存，单位MB
        return arrayOf(availMem, totalMem)
    }
	
	fun testJavaCrash(){
		val s2: String? = null
		if (s2!!.length > 0) {
			throw RuntimeException("主线程异常")
		}
	}
}
