package com.example.canberk.kurye

import android.content.Intent
import android.os.Bundle
import android.support.design.widget.BottomNavigationView
import android.support.v7.app.AppCompatActivity
import android.view.View

class ana_sayfa : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.a_sayfa)
        val bottomNavigationView = findViewById<View>(R.id.navigation) as BottomNavigationView

        val menu = bottomNavigationView.menu
        val menuItem = menu.getItem(0)
        menuItem.isChecked = true

        bottomNavigationView.setOnNavigationItemSelectedListener(BottomNavigationView.OnNavigationItemSelectedListener { menuItem ->
            when (menuItem.itemId) {

                R.id.navigation_dashboard -> {
                    val intent1 = Intent(this@ana_sayfa, siparis_listesi::class.java)
                    startActivity(intent1)

                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_notifications -> {
                    val intent2 = Intent(this@ana_sayfa, kurye_profil::class.java)
                    startActivity(intent2)
                    return@OnNavigationItemSelectedListener true
                }

                R.id.navigation_home -> {
                    val intent3 = Intent(this@ana_sayfa, ana_sayfa::class.java)
                    startActivity(intent3)
                    return@OnNavigationItemSelectedListener true
                }
            }
            false
        })
    }

}
