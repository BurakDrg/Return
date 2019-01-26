package com.example.canberk.kurye;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

public class siparis_listesi extends AppCompatActivity {

    private TextView mTextMessage;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kurye_profil);
        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.navigation);

        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(0);
        menuItem.setChecked(true);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                switch (menuItem.getItemId()) {

                    case R.id.navigation_dashboard:
                        Intent intent1 = new Intent(siparis_listesi.this, ana_sayfa.class);
                        startActivity(intent1);
                        break;

                    case R.id.navigation_notifications:
                        Intent intent2 = new Intent(siparis_listesi.this, siparis_listesi.class);
                        startActivity(intent2);
                        break;

                    case R.id.navigation_home:
                        Intent intent3 = new Intent(siparis_listesi.this, siparis_detay.class);
                        startActivity(intent3);
                        break;

                }
                return false;
            }
        });
    }


}
